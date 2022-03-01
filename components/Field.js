export default function Field({ label, name, type, className, onChange, value}) {
    const addClassName = className ? ` ${className}` : "";
    const formControlClassName = `bg-transparent border border-primarygray-300 py-3 px-6 w-full${addClassName}`;


    return (
        <div className="mb-6">
            <label htmlFor={name} className="block mb-1 text-sm font-semibold">{label}</label>
            {type === "text" && (
                <input type="text" name={name} id={name} className={formControlClassName} 
                onChange={onChange} 
                value={value}
                required
                />
            )}
            {type === "email" && (
                <input type="email" name={name} id={name} className={formControlClassName}
                onChange={onChange}
                value={value}
                required 
                />
            )}

            {type === "textarea" && (
                <textarea name={name} id={name} className={formControlClassName} 
                onChange={onChange} 
                value={value}
                required
                />
            )}
            
        </div>
    );
}