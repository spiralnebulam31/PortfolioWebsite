const ToggleButton = ({ setMobileOptionsOpen }) => {
  return (
    <div>
      <button
        onClick={() => setMobileOptionsOpen(!mobileOptionsOpen)}
      className="w-10 h-10 bg-secondary rounded-full cursor-pointer object-contain">        
      </button>
    </div>
  )
}

export default ToggleButton;
