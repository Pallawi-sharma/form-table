const Profile = ({ fields, setFields }) => {
  const { name, age, email } = fields;

  const handleOnchange = (e, item) => {
    setFields(prev => ({...prev, [item]: e.target.value}))
  }
  return (
    <div>
      <div>
        <label>Name: </label>
        <input type="text" value={name} onChange={(e) => handleOnchange(e, "name")}/>
      </div>
      <div>
        <label>Age: </label>
        <input type="number" value={age} onChange={(e) => handleOnchange(e, "age")}/>
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => handleOnchange(e, "email")}/>
      </div>
    </div>
  );
};

export default Profile;
