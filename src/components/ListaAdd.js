import React,{useState} from 'react'

export default function ListaAdd({guardarAsignatura}) {
    const [asignatura, setAsignatura] = useState("");
    const [nrc, setNRC] = useState("");
    const [credito, setCredito] = useState("");
    const [parcial1, setParcial1] = useState("");
    const [parcial2, setParcial2] = useState("");

    const guardarHandler = (event) => {
        event.preventDefault();
        const asignaturaNueva = {
            "asignatura":asignatura,
            "nrc":nrc,
            "credito":credito,
            "parcial1":parcial1,
            "parcial2":parcial2,
        };
        //console.log("Nueva tarea: ", tareaNueva);
        guardarAsignatura(asignaturaNueva);
    }
    const nuevaAsignatura = (event) => {
        setAsignatura(event.target.value);
    }
    const nuevoNRC = (event) => {
        setNRC(event.target.value);
    }
    const nuevoCredito = (event) => {
        setCredito(event.target.value);
    }
    const nuevoParcial1 = (event) => {
        setParcial1(event.target.value);
    }
    const nuevoParcial2 = (event) => {
        setParcial2(event.target.value);
    }

    return (
        <div className='row mt-4'>
            <div className='col'>
                <form onSubmit={guardarHandler}>
                    <div className='card mt-4'>
                        <div className='card-header'>
                            <strong>Nueva Clase</strong>
                        </div>

                        <div className='card-body'>
                            <div class='form-group'>
                                <label for="asignatura">Titulo de la asignatura</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="asignatura"
                                    name="asignatura"
                                    placeholder="Ingresa la asignatura"
                                    value={asignatura}
                                    onChange={nuevaAsignatura}
                                    required
                                />
                            </div>
                            <div class='form-group'>
                                <label for="nrc">NRC</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="nrc"
                                    name="nrc"
                                    placeholder="Ingrese el nrc"
                                    value={nrc}
                                    onChange={nuevoNRC}
                                    required
                                />
                            </div>

                            <div class='form-group'>
                                <label for="credito">Ingresa el credito</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="credito"
                                    name="credito"
                                    placeholder="Ingrese el credito"
                                    value={credito}
                                    onChange={nuevoCredito}
                                    required
                                />
                            </div>

                            <div class='form-group'>
                                <label for="parcial1">Parcial #1</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="parcial1"
                                    name="parcial1"
                                    placeholder="Ingrese el parcial"
                                    value={parcial1}
                                    onChange={nuevoParcial1}
                                    required
                                />
                            </div>

                            <div class='form-group'>
                                <label for="parcial2">Parcial #2</label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="parcial2"
                                    name="parcial2"
                                    placeholder="Ingrese el parcial2"
                                    value={parcial2}
                                    onChange={nuevoParcial2}
                                    required
                                />
                            </div>

                        </div>

                        <div className="card-footer">
                            <button className="btn btn-success">Guardar</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}