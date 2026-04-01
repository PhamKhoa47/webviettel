import React, { useState } from 'react';
import { MessageCircle, Phone, X, Facebook, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND } from '../constants';

export default function ChatMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            className="glass-card p-2 flex flex-col gap-2 w-64 mb-2 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-viettel-red to-viettel-dark p-3 rounded-2xl mb-1">
              <h4 className="font-black text-white text-md leading-tight uppercase tracking-tighter">Hỗ trợ trực tuyến</h4>
              <p className="text-white/70 text-[10px] font-medium">Viettel Đắk Lắk sẵn sàng phục vụ</p>
            </div>
            
            <a 
              href={`https://zalo.me/${BRAND.phone.replace(/\./g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 text-slate-900 transition-all duration-300 group border border-transparent hover:border-slate-200"
            >
              <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                <MessageSquare size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs">Zalo Chat</span>
              </div>
            </a>

            <a 
              href={`tel:${BRAND.phone}`} 
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 text-slate-900 transition-all duration-300 group border border-transparent hover:border-slate-200"
            >
              <div className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500">
                <Phone size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs">Gọi trực tiếp</span>
              </div>
            </a>

            <a 
              href="https://m.me/vietteldaklak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-100 text-slate-900 transition-all duration-300 group border border-transparent hover:border-slate-200"
            >
              <div className="w-8 h-8 bg-sky-500/20 rounded-lg flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                <Facebook size={16} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xs">Messenger</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-14 h-14 flex items-center justify-center"
        aria-label="Toggle chat menu"
      >
        <div className="absolute inset-0 bg-viettel-red rounded-full shadow-[0_0_20px_rgba(238,0,0,0.3)] transition-all duration-500 group-hover:scale-110 group-active:scale-95" />
        <div className="absolute inset-0 bg-viettel-red rounded-full animate-ping opacity-20" />
        <div className="relative text-white transition-all duration-500 group-hover:rotate-12">
          {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
        </div>
      </button>
    </div>
  );
}
