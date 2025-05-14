import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Package, Collection, LogOut } from 'lucide-react';
import { supabase } from '../../lib/supabase';

const AdminLayout: React.FC = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/admin/login');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md min-h-screen p-4">
          <div className="mb-8">
            <Link to="/" className="text-xl font-serif text-stone-800">
              Serenity Home
            </Link>
          </div>
          
          <nav className="space-y-2">
            <Link
              to="/admin"
              className="flex items-center gap-2 p-2 rounded hover:bg-stone-50 text-stone-700"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </Link>
            <Link
              to="/admin/products"
              className="flex items-center gap-2 p-2 rounded hover:bg-stone-50 text-stone-700"
            >
              <Package className="w-5 h-5" />
              Products
            </Link>
            <Link
              to="/admin/collections"
              className="flex items-center gap-2 p-2 rounded hover:bg-stone-50 text-stone-700"
            >
              <Collection className="w-5 h-5" />
              Collections
            </Link>
          </nav>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 p-2 rounded hover:bg-stone-50 text-stone-700 mt-8"
          >
            <LogOut className="w-5 h-5" />
            Sign Out
          </button>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;