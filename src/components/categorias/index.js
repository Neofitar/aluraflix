import "../campo-inputs/campo.css"

const grupos = [{
    titulo: "Programación",
    color: "#6BD1FF"
},
{
    titulo: "Back End",
    color: "#00C86F"
},
{
    titulo: "Front End",
    color: "#FFBA05"
},
{
    titulo: "Móvil",
    color: "#DC6EBE"
},
{
    titulo: "Análisis de datos",
    color: "#9CD33B"
},
{
    titulo: "Data Science",
    color: "#6B5BE2"
},
{
    titulo: "Devops",
    color: "#FF8C2A"
},
{
    titulo: "Innovación y Gestión",
    color: "#9CD33B"
},
{
    titulo: "UX y Diseño",
    color: "#6BD1FF"
}
];


const Categorias = (props) => {
    return (
        <div className="campo-input">
            <label className="campo-label">{props.title}</label>
            <select>
                {grupos.map((grupo, index) => (
                    <option
                        key={index}
                        style={{backgroundColor:grupo.color}}>
                        {grupo.titulo}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Categorias;