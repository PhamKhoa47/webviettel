import React, { useState } from 'react';
import { MessageCircle, Phone, X, MessageSquare, Share2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BRAND } from '../constants';

export default function ChatMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 right-8 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0.9, y: 20, filter: 'blur(10px)' }}
            className="glass-card p-2 flex flex-col gap-2 w-72 mb-2 overflow-hidden"
          >
            <div className="bg-gradient-to-br from-viettel-red to-viettel-dark p-4 rounded-2xl mb-2">
              <h4 className="font-black text-slate-900 text-lg leading-tight uppercase tracking-tighter">Hỗ trợ trực tuyến</h4>
              <p className="text-slate-900/70 text-xs font-medium">Viettel Đắk Lắk sẵn sàng phục vụ bạn</p>
            </div>
            
            <a 
              href={`https://zalo.me/${BRAND.phone.replace(/\./g, '')}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 text-slate-900 transition-all duration-300 group border border-transparent hover:border-slate-200"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-xl flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-slate-900 transition-all duration-500">
                <MessageSquare size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Zalo Chat</span>
                <span className="text-[10px] text-slate-600 uppercase tracking-widest">Phản hồi ngay</span>
              </div>
            </a>

            <a 
              href={`tel:${BRAND.phone}`} 
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 text-slate-900 transition-all duration-300 group border border-transparent hover:border-slate-200"
            >
              <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-500">
                <Phone size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Gọi trực tiếp</span>
                <span className="text-[10px] text-slate-600 uppercase tracking-widest">Hotline 24/7</span>
              </div>
            </a>

            <a 
              href="https://m.me/vietteldaklak" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-4 p-4 rounded-2xl hover:bg-slate-100 text-slate-900 transition-all duration-300 group border border-transparent hover:border-slate-200"
            >
              <div className="w-10 h-10 bg-sky-500/20 rounded-xl flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-slate-900 transition-all duration-500">
                <Share2 size={20} />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm">Messenger</span>
                <span className="text-[10px] text-slate-600 uppercase tracking-widest">Facebook Page</span>
              </div>
            </a>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-16 h-16 flex items-center justify-center"
        aria-label="Toggle chat menu"
      >
        <div className="absolute inset-0 bg-viettel-red rounded-full shadow-[0_0_30px_rgba(238,0,0,0.4)] transition-all duration-500 group-hover:scale-110 group-active:scale-95" />
        <div className="absolute inset-0 bg-viettel-red rounded-full animate-ping opacity-20" />
        <div className="relative text-slate-900 transition-all duration-500 group-hover:rotate-12">
          {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
        </div>
      </button>
    </div>
  );
}
