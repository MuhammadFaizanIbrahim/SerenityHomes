import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Minus, Plus, Share2, ShoppingCart, Star } from 'lucide-react';
import Button from '../components/ui/Button';

const product = {
  id: 1,
  name: "Artisan Ceramic Vase",
  category: "Decor",
  price: 89,
  description: "Hand-crafted ceramic vase with a unique organic form and subtle glazed finish. Each piece is individually made by skilled artisans, making every vase one-of-a-kind.",
  details: [
    "Height: 12 inches",
    "Diameter: 6 inches",
    "Material: Ceramic",
    "Color: Natural white with subtle variations",
    "Care: Hand wash with mild soap and water"
  ],
  images: [
    "https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    "https://images.pexels.com/photos/6707632/pexels-photo-6707632.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    "https://images.pexels.com/photos/6707641/pexels-photo-6707641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
  ],
  rating: 4.8,
  reviews: 124,
  inStock: true
};

const SingleProductPage: React.FC = () => {
  const { id } = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlist, setIsWishlist] = useState(false);

  return (
    <main className="pt-32 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-serenity-mint/20">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden ${
                    selectedImage === index ? 'ring-2 ring-serenity-pink' : ''
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="font-serif text-4xl text-stone-800 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 text-stone-600">
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-amber-400 fill-current" />
                  <span className="ml-1">{product.rating}</span>
                  <span className="ml-1">({product.reviews} reviews)</span>
                </div>
                <span>•</span>
                <span>{product.category}</span>
              </div>
            </div>

            <div className="text-3xl font-medium text-stone-800">${product.price}</div>

            <p className="text-stone-600">{product.description}</p>

            <div className="space-y-2">
              <h3 className="font-medium text-stone-800">Product Details:</h3>
              <ul className="list-disc list-inside space-y-1 text-stone-600">
                {product.details.map((detail, index) => (
                  <li key={index}>{detail}</li>
                ))}
              </ul>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center border border-stone-200 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-stone-50"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-stone-50"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <Button variant="primary" className="flex-1 flex items-center justify-center gap-2">
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 border-t border-stone-200">
              <button
                onClick={() => setIsWishlist(!isWishlist)}
                className="flex items-center gap-2 text-stone-600 hover:text-serenity-pink"
              >
                <Heart className={`h-5 w-5 ${isWishlist ? 'fill-serenity-pink text-serenity-pink' : ''}`} />
                Wishlist
              </button>
              <button className="flex items-center gap-2 text-stone-600 hover:text-serenity-pink">
                <Share2 className="h-5 w-5" />
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleProductPage;