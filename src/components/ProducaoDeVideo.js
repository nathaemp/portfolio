import style from './css/ProducaoDeVideo.module.css'

function ProducaoDeVideo(){
    return(<>
        <div className={style.conteiner}>
            <div className={style.img}>
            <h1>Produção de vídeos</h1>
            <p>Vídos editados, filmados ou produzidos por mim</p>
            </div>
            <div className={style.videos}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/WyM9XczaNDM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4tkVRXxLYns" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/6SvmH9b-zu0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/BMy0vUBiDDU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>

        </div>
    </>
    )
}
export default ProducaoDeVideo