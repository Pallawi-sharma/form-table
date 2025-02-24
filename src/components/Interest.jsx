const Interest = ({ fields, setFields }) => {
  const { interests } = fields;

  const handleCheckbox = (e) => {
    setFields((prev) => ({
      ...prev,
      interests: e.target.checked
        ? [...prev.interests, e.target.name]
        : prev.interests.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <>
      <label>
        <input
          type="checkbox"
          name="coding"
          checked={interests.includes("coding")}
          onChange={(e) => handleCheckbox(e)}
        />
        Coding
      </label>
      <label>
        <input
          type="checkbox"
          name="javaScript"
          checked={interests.includes("javaScript")}
          onChange={(e) => handleCheckbox(e)}
        />
        javaScript
      </label>
      <label>
        <input
          type="checkbox"
          name="music"
          checked={interests.includes("music")}
          onChange={(e) => handleCheckbox(e)}
        />
        Music
      </label>
    </>
  );
};
export default Interest;
