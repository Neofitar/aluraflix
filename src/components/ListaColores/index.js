import "../campo-inputs/campo.css"

const color = [
    "#6BD1FF",
    "#00C86F",
    "#FFBA05",
    "#DC6EBE",
    "#9CD33B",
    "#6B5BE2",
    "#FF8C2A",
    "#9CD33B",
    "#6BD1FF",
];

const ListaColores = (props) => {
    return (
        <div className="campo-input">
            <label className="campo-label">{props.title}</label>     
            <select>
                {color.map((colorOption, index) => (
                    <option
                        key={index}
                        value={colorOption}
                        style={{ backgroundColor: colorOption }}>
                        {colorOption}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ListaColores;