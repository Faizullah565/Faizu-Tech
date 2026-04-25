const AdSense = ({ slot, style, className, format = "horizontal" }) => {
  const isSidebar = format === "sidebar";
  const isSquare = format === "square";

  return (
    <div
      className={`adsense-placeholder my-8 flex items-center justify-center border-2 border-dashed border-gray-200 bg-gray-50 text-gray-400 transition-colors hover:bg-gray-100 ${
        isSidebar ? "h-[600px] w-full" : isSquare ? "h-[250px] w-[250px] mx-auto" : "h-28 w-full"
      } ${className}`}
      style={style}
    >
      <div className="text-center p-4">
        <p className="text-xs font-bold uppercase tracking-widest opacity-60">Advertisement</p>
        <span className="text-[10px]">Slot ID: {slot}</span>
      </div>
      {/* 
        Actual AdSense code:
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
             data-ad-slot={slot}
             data-ad-format={isSidebar ? 'vertical' : 'auto'}
             data-full-width-responsive="true"></ins>
      */}
    </div>
  );
};

export default AdSense;
