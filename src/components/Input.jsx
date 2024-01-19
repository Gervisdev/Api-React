

export default function Input({label,name,id,type ="text",value,handleChange}) {
  return (
 
   <div className="form-group mb-3">
        <label htmlFor={id} className="form-label">{label}:</label>
        <input type={type}
        id={id}
        name={name}
        className="form-control"
        placeholder={label}
        value={value}
        onChange={handleChange}
        />
   </div>
  
  )

}

