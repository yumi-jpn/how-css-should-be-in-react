export const InlineStyle = () => {
  const containertStyles = {
    border: "solid 2px #392eff",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };

  const titleStyles = {
    margin: "0",
    color: "#3d84a8"
  };

  const buttonStyles = {
    backgroundColor: "#abedd8",
    border: "none",
    padding: "8px",
    borderRadius: "8px"
  };

  return (
    <div style={containertStyles}>
      <p style={titleStyles}>- Inline Styles -</p>
      <button style={buttonStyles}>Fight!</button>
    </div>
  );
};
