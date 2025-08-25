'use client';

import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 12.976c0 4.84-3.92 8.76-8.76 8.76S3.48 17.816 3.48 12.976c0-2.42.983-4.603 2.58-6.204L3 3l3.776.944A8.724 8.724 0 0 1 12.24 3.24c4.84 0 8.76 3.92 8.76 8.76zm-5.29-3.48c-.273-.136-.546-.205-1.09-.342-.544-.136-1.09-.204-1.36-.204-.41 0-.75.137-.954.342-.205.204-.75.75-.955 1.02-.204.273-.408.34-.682.205-.272-.137-1.09-.477-2.045-1.36-.75-.682-1.294-1.43-1.5-1.77-.204-.34-.034-.545.137-.75.136-.17.272-.273.41-.41.136-.136.17-.272.272-.476.103-.205.034-.41 0-.545l-.545-1.295c-.17-.41-.34-.51-.58-.51-.204 0-.442.034-.613.034-.205 0-.443.068-.614.204-.205.137-.477.41-.682.75-.205.34-.443.784-.443 1.36s.273 1.5.477 1.838c.205.34.852 1.36 1.943 2.312 1.43 1.226 2.45 1.568 2.99 1.704.544.136.985.102 1.32-.068.374-.17.954-.546 1.158-.955.205-.41.205-.75.136-1.02-.068-.273-.272-.41-.545-.546z"></path>
  </svg>
);

export default function WhatsAppButton() {
  const phoneNumber = "1234567890"; // Reemplaza con tu número de WhatsApp
  const message = "Hola, me gustaría solicitar una cotización para un proyecto ambiental."; // Mensaje predeterminado

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:bg-[#128C7E] transition-colors duration-300 transform hover:scale-110"
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon />
    </Link>
  );
}
