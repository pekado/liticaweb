import style from './style.css'

const Sidenav = () => {
  return (
    <aside className={style.sidenav}>
      <div className={style.categories}>
        <ul>
          <li>Arquitectura</li>
          <li>poesía</li>
          <li>publicaciones</li>
          <li>fotografía</li>
        </ul>
      </div>
      <div>
        <img />
        <ul>
          <li>NOSOTROS</li>
          <li>CATÁLOGO</li>
          <li>MANIFESTO</li>
        </ul>
      </div>
      <div className={style.footer}>
         <h5>(C) 2020</h5>
      </div>
    </aside>
  )

}
export default Sidenav