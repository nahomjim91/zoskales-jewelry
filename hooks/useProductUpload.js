// hooks/useProductUpload.js
import { useState } from 'react';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';

const SERVER_URL =  'http://localhost:4000';

export const useProductUpload = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(null);
  const [error, setError] = useState(null);

  const uploadImages = async (files, folderPath, quality = 10) => {
    if (!files || files.length === 0) {
      throw new Error('No images provided');
    }

    const formData = new FormData();
    formData.append('folderPath', `zoskales-jewelry/`+folderPath);
    formData.append('quality', quality.toString());

    files.forEach((file) => {
      formData.append('images', file);
    });

    const response = await fetch(`${SERVER_URL}/upload`, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Image upload failed');
    }

    return await response.json();
  };

  const uploadProduct = async (productData, imageFiles, bgImageFiles = [], quality = 10) => {
    setLoading(true);
    setError(null);
    setProgress('Validating data...');

    try {
      // Validate required fields
      const { category, subcategory, name, stoneType, price, folderPath } = productData;
      
      if (!category || !subcategory || !name || !stoneType || !price || !folderPath) {
        throw new Error('Missing required product fields');
      }

      if (!imageFiles || imageFiles.length === 0) {
        throw new Error('At least one product image is required');
      }

      // Upload product images
      setProgress(`Uploading ${imageFiles.length} product image(s)...`);
      const imageUploadResult = await uploadImages(imageFiles, folderPath, quality);
      const imagePaths = imageUploadResult.files.map(file => file.path);

      // Upload background images if provided
      let bgImagePaths = [];
      if (bgImageFiles && bgImageFiles.length > 0) {
        setProgress(`Uploading ${bgImageFiles.length} background image(s)...`);
        const bgUploadResult = await uploadImages(bgImageFiles, folderPath, quality);
        bgImagePaths = bgUploadResult.files.map(file => file.path);
      }

      // Prepare product data for Firebase
      setProgress('Saving product to database...');
      const productToSave = {
        category: category.trim(),
        subcategory: subcategory.trim(),
        name: name.trim(),
        stoneType: stoneType.trim(),
        price: parseFloat(price),
        oldPrice: productData.oldPrice ? parseFloat(productData.oldPrice) : null,
        size: productData.size?.trim() || '',
        images: imagePaths,
        bgimage: bgImagePaths,
        folderPath: folderPath.trim(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      };

      // Save to Firebase
      const docRef = await addDoc(collection(db, 'products'), productToSave);

      setProgress('Upload completed!');
      setLoading(false);

      return {
        success: true,
        productId: docRef.id,
        product: productToSave,
        imageUploadResult,
      };
    } catch (err) {
      console.error('Product upload error:', err);
      setError(err.message || 'Upload failed');
      setLoading(false);
      throw err;
    }
  };

  const reset = () => {
    setLoading(false);
    setProgress(null);
    setError(null);
  };

  return {
    uploadProduct,
    loading,
    progress,
    error,
    reset,
  };
};