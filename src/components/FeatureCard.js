import React from "react";
import PropTypes from "prop-types";

export default function FeatureCard({
  title,
  description,
  icon,
  className = "",
  variant = "default",
  onClick,
}) {
  const baseClasses =
    "rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer";

  const variants = {
    default: "bg-gray-50 shadow-md hover:shadow-lg",
    featured:
      "bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-lg",
    outlined:
      "bg-white border-2 border-green-200 hover:border-green-400 shadow-sm",
    glass:
      "bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white shadow-lg",
  };

  const iconColors = {
    default: "text-green-600",
    featured: "text-white",
    outlined: "text-green-600",
    glass: "text-white",
  };

  const textColors = {
    default: "text-gray-600",
    featured: "text-green-100",
    outlined: "text-gray-600",
    glass: "text-gray-200",
  };

  const titleColors = {
    default: "text-gray-900",
    featured: "text-white",
    outlined: "text-gray-900",
    glass: "text-white",
  };

  return (
    <div
      className={`${baseClasses} ${variants[variant]} ${className}`}
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onClick(e);
              }
            }
          : undefined
      }
    >
      {/* Icon Container */}
      <div className={`mb-4 flex justify-center ${iconColors[variant]}`}>
        <div className="p-3 rounded-full bg-opacity-10 bg-current">
          {React.cloneElement(icon, { size: icon.props.size || 28 })}
        </div>
      </div>

      {/* Title */}
      <h3 className={`text-xl font-semibold mb-3 ${titleColors[variant]}`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-sm leading-relaxed ${textColors[variant]}`}>
        {description}
      </p>

      {/* Optional Action Indicator */}
      {onClick && (
        <div
          className={`mt-4 flex justify-center ${iconColors[variant]} opacity-60`}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
  variant: PropTypes.oneOf(["default", "featured", "outlined", "glass"]),
  onClick: PropTypes.func,
};

// Alternative compact version for smaller spaces
export function CompactFeatureCard({
  title,
  description,
  icon,
  className = "",
}) {
  return (
    <div
      className={`bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 ${className}`}
    >
      <div className="flex items-start space-x-3">
        <div className="text-green-600 mt-1">
          {React.cloneElement(icon, { size: 20 })}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-gray-900 text-sm mb-1">{title}</h4>
          <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

CompactFeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  className: PropTypes.string,
};
