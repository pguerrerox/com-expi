//exporting component
export default function Prods_producto(props) {
  let alternateL = 'flex-lg-row';
  let alternateR = 'flex-lg-row-reverse';

  let alter_eID = (props.sku === 'rottis' || props.sku === 'costero') ? (props.eID + 1) : props.eID;
  
  return (
    <>
      <section className='container-xl'>
        {
          (props.sku === 'rottis' || props.sku === 'costero' ) && (props.prodImg === '1')
            ?
            <div className='border-bot-1 py-4'>
              <div className='d-flex flex-wrap justify-content-center align-items-center'>
                <div className='row justify-content-center align-items-center flex-column-reverse flex-lg-row'>
                  <div className='col-sm-10 col-lg-6'>
                    <p>{props.preMarked} <span className='text-primary bold'>{props.marked} </span>{props.postMarked}</p>
                    {props.p2 && <p>{props.p2}</p>}
                  </div>
                  <div className="col-sm-8 col-lg-4">
                    <img className='w-100' src={`/images/productos/skus/${props.sku}/${props.prodImg}.png`} alt="imagen del producto" />
                  </div>
                </div>
                <div className='row justify-content-center align-items-center flex-column flex-lg-row'>
                  <div className='col-sm-8 col-lg-4'>
                    <img className='w-100' src={`/images/productos/skus/${props.sku}/${props.special.prodImg}.png`} alt="imagen del producto" />
                  </div>
                  <div className='col-sm-10 col-lg-6 py-sm-3'>
                    <p>{props.special.preMarked} <span className='text-primary bold'>{props.special.marked} </span>{props.special.postMarked}</p>
                    <p className='pt-3'><span className='bold'>{props.pres1}</span> {props.pres2}</p>
                  </div>
                </div>
              </div>
            </div>
            :
            <div className='border-bot-1 py-4'>
              <div className={`row d-flex flex-column justify-content-center align-items-center ${alter_eID % 2 == 1 ? alternateL : alternateR}`}>
                <div className="d-flex justify-content-center col-10 col-lg-6">
                  <img className='col' src={`/images/productos/skus/${props.sku}/${props.prodImg}.png`} alt="imagen del producto" />
                </div>
                <div className='text-justify d-flex flex-column justify-content-center align-items-center col-11 col-lg-6 pt-3 pt-lg-0'>
                  <div>
                    {props.h5 && <h5 className='text-primary bold text-uppercase text-center py-1'>{props.h5}</h5>}
                    {props.h5_2 && <h5 className='border-top-1 text-primary bold text-uppercase text-center py-1' >{props.h5_2}</h5>}
                    <p>{props.preMarked} <span className='text-primary bold'>{props.marked} </span>{props.postMarked}</p>
                    {props.p2 && <p>{props.p2}</p>}
                    {props.p3 && <p>{props.p3}</p>}
                    <p className='pt-3'><span className='bold'>{props.pres1}</span> {props.pres2}</p>
                  </div>
                  {props.img2 && <img className='col-7' src={`/images/productos/skus/${props.sku}/${props.img2}.png`} alt='imagen relacionada'/>}
                </div>
              </div>
            </div>
        }
      </section>
    </>
  )
}