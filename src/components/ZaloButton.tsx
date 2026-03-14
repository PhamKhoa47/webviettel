import React, { useState } from 'react';
import { MessageCircle, Phone, X, Facebook } from 'lucide-react';
import { BRAND } from '../constants';

export default function ChatMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-3 w-64 border border-slate-100"
        >
          <h4 className="font-bold text-slate-900 mb-1">Liên hệ hỗ trợ</h4>
          <a href={`https://zalo.me/${BRAND.phone.replace(/\./g, '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-blue-50 text-slate-700 hover:text-blue-600 transition-colors">
            <MessageCircle className="text-blue-500" />
            <span>Chat Zalo</span>
          </a>
          <a href={`tel:${BRAND.phone}`} className="flex items-center gap-3 p-3 rounded-xl hover:bg-emerald-50 text-slate-700 hover:text-emerald-600 transition-colors">
            <Phone className="text-emerald-500" />
            <span>Gọi ngay</span>
          </a>
          <a href="https://m.me/vietteldaklak" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-xl hover:bg-sky-50 text-slate-700 hover:text-sky-600 transition-colors">
            <Facebook className="text-sky-600" />
            <span>Messenger</span>
          </a>
        </motion.div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-viettel-red text-white p-4 rounded-full shadow-lg hover:bg-viettel-dark transition-all hover:scale-110"
        aria-label="Toggle chat menu"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
import { motion } from 'motion/react';
