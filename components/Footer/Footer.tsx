import React from 'react';


export const Footer: React.FC = () => {
    return (
        <footer className="bg-textSecondary  py-12 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-pageBase">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 ">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Be Light</h3>
                        <p className="text-sm">
                            Bringing lightness to your digital experience.
                        </p>
                    </div>

                    {/* Product */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Product</h4>
                        <ul className="space-y-2 text-sm ">
                            <li><a href="#" className="hover:text-textPrimary">Features</a></li>
                            <li><a href="#" className="hover:text-textPrimary">Pricing</a></li>
                            <li><a href="#" className="hover:text-textPrimary">Security</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm ">
                            <li><a href="#" className="hover:text-textPrimary">About</a></li>
                            <li><a href="#" className="hover:text-textPrimary">Blog</a></li>
                            <li><a href="#" className="hover:text-textPrimary">Careers</a></li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2 text-sm ">
                            <li><a href="#" className="hover:text-textPrimary">Privacy</a></li>
                            <li><a href="#" className="hover:text-textPrimary">Terms</a></li>
                            <li><a href="#" className="hover:text-textPrimary">Contact</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="border-t border-pageBase pt-8 flex flex-col md:flex-row justify-between items-center text-sm ">
                    <p>&copy; 2024 Be Light. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-textPrimary">Twitter</a>
                        <a href="#" className="hover:text-textPrimary">GitHub</a>
                        <a href="#" className="hover:text-textPrimary">LinkedIn</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};