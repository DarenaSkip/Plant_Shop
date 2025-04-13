// src/components/Card.jsx
const Card = ({ img, title, text }) => {
    return (
      <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
        <img src={img} alt={title} className="w-full h-full object-cover brightness-90" />
        <div className="absolute top-4 left-4 z-10 bg-white/80 backdrop-blur-md p-3 rounded-lg">
          <h3 className="text-xl font-bold text-green-800">{title}</h3>
          <p className="text-sm text-gray-800">{text}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  