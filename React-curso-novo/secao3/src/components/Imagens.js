import img2 from './assets/img2'


Imagens = () => {
    return (
        <div>
            <div> {/*imagem em public */}
                <img src="/img1.jpg" alt="Paisagem do mar" />
            </div>
            <div>  {/*imagem em assets*/}
                <img src={Img2} alt=" Foto da planta" />
            </div>
        </div>
    )
}

export default Imagens;