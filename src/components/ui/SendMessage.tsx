'use client'

import { useState } from 'react'
import { MessageSquareText, X, ChevronDown, ChevronUp } from 'lucide-react'
import { useI18n } from '@/lib/i18n'

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormStatus {
    type: 'success' | 'error' | '';
    message: string;
}

export function SendMessage() {
    const { t } = useI18n()
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<FormStatus>({ type: '', message: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
        setStatus({ type: '', message: '' });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // 基本验证
        if (!formData.name || !formData.email || !formData.message) {
            setStatus({
                type: 'error',
                message: 'Please fill in all required fields'
            });
            return;
        }

        // 邮箱格式验证
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setStatus({
                type: 'error',
                message: 'Please enter a valid email address'
            });
            return;
        }

        try {
            setLoading(true);
            
            // 模拟API调用
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            setStatus({
                type: 'success',
                message: 'Message sent successfully! We will contact you soon.'
            });
            
            // 重置表单
            setFormData({
                name: '',
                phone: '',
                email: '',
                message: ''
            });
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({
                type: 'error',
                message: 'Failed to send message. Please try again later.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed right-6 bottom-20 z-50">
            {/* 聊天按钮 */}
            <button
                onClick={toggleChat}
                aria-label="Send Message"
                className="flex items-center justify-center size-10 md:size-12 bg-orange-500 text-white rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-110"
            >
                {isOpen ? (
                    <X className="w-5 h-5" />
                ) : (
                    <MessageSquareText className="w-5 h-5" />
                )}
            </button>

            {/* 聊天对话框 */}
            <div 
                className={`absolute bottom-14 right-0 w-80 md:w-96 bg-white rounded-lg shadow-xl transition-all duration-300 ease-in-out transform origin-bottom-right ${
                    isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
                }`}
                style={{
                    maxHeight: 'calc(100vh - 8rem)',
                    overflowY: 'auto'
                }}
            >
                <div className="p-4 bg-orange-500 text-white rounded-t-lg flex justify-between items-center">
                    <h3 className="text-lg font-semibold">{t.SendUsAMessage || 'Send Us A Message'}</h3>
                    <button 
                        onClick={toggleChat}
                        className="text-white hover:text-gray-200 focus:outline-none transition-colors"
                    >
                        {isOpen ? (
                            <ChevronUp className="w-5 h-5" />
                        ) : (
                            <ChevronDown className="w-5 h-5" />
                        )}
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-4 space-y-4">
                    {status.message && (
                        <div 
                            className={`p-3 text-sm rounded-lg ${
                                status.type === 'error' 
                                    ? 'bg-red-50 text-red-600 border border-red-200' 
                                    : 'bg-green-50 text-green-600 border border-green-200'
                            }`}
                        >
                            {status.message}
                        </div>
                    )}
                    
                    <div>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t.YourName || 'Your Name *'}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            required
                        />
                    </div>
                    
                    <div>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t.YourEmail || 'Your Email *'}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                            required
                        />
                    </div>
                    
                    <div>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t.PhoneNumber || 'Phone Number (Optional)'}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                        />
                    </div>
                    
                    <div>
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder={t.YourMessage || 'Your Message *'}
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                            required
                        />
                    </div>
                    
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 rounded-lg text-sm transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? (t.SendingMessage || 'Sending...') : (t.SendMessage || 'Send Message')}
                    </button>
                </form>
            </div>
        </div>
    )
}