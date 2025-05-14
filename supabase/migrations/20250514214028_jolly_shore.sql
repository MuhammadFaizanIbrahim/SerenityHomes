/*
  # Create products and collections tables

  1. New Tables
    - `collections`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      
    - `products`
      - `id` (uuid, primary key)
      - `name` (text)
      - `description` (text)
      - `price` (numeric)
      - `image_url` (text)
      - `collection_id` (uuid, foreign key)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to perform CRUD operations
*/

-- Create collections table
CREATE TABLE collections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create products table
CREATE TABLE products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  price numeric NOT NULL,
  image_url text NOT NULL,
  collection_id uuid REFERENCES collections(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Create policies for collections
CREATE POLICY "Allow public read access" ON collections
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to create collections"
  ON collections FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update collections"
  ON collections FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete collections"
  ON collections FOR DELETE
  TO authenticated
  USING (true);

-- Create policies for products
CREATE POLICY "Allow public read access" ON products
  FOR SELECT USING (true);

CREATE POLICY "Allow authenticated users to create products"
  ON products FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update products"
  ON products FOR UPDATE
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to delete products"
  ON products FOR DELETE
  TO authenticated
  USING (true);