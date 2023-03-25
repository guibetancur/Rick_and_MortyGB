import { useState, useEffect } from 'react';
import styles from '../estilos/Card.module.css'
import { Link } from 'react-router-dom'
import { useDispatch,  useSelector } from 'react-redux';
import { addFavorites, deleteFavorites } from './Redux/actions';

export default function Card(props) {
   const [isFav, setIsFav] = useState(false)
   const dispatch = useDispatch()
   const myFavorites = useSelector((estado)=> estado.myFavorites)

   function handleFavorite(id) {
      if (isFav) {
         setIsFav(false)
         dispatch(deleteFavorites(id))
      } else {
         setIsFav(true)
         dispatch(addFavorites(id))
      }
      // isFav = !isFav
   }

   useEffect(() => {
      myFavorites.forEach((id) => {
         if (id === props.id) {
            setIsFav(true)
         }
      });
   }, [myFavorites])


   return (
      <div className={`${styles.card} ${styles.floating}`}>
         {/* className={`${styles.description} ${styles.yellow}`} */}
         {/* className={styles.card} */}
         <div onClick={props.touch}>
            <div>
               <div className={styles.x}>
                  {isFav ? 
                     (<button onClick={()=>handleFavorite(props.id)}>❤️</button>) : 
                     (<button onClick={()=>handleFavorite(props.id)}>♡</button>)
                  }
                  {props.id > 2 && !isFav  ? <> <button onClick={props.onClose}>X</button><hr /> </> : null}
               </div>
               <div className={styles.txt}>
                  <Link to={`/detail/${props.id}`}>
                     <label id={props.id}>Name:</label>
                     <h2 className={props.gender === 'Male' ? 'male' : 'female'} style={{ marginTop: '20px' }}>{props.name}</h2>
                     <label>Species:</label>
                     <h2>{props.species}</h2>
                     <label>Gender:</label>
                     <h2>{props.gender}</h2>
                     <img src={props.image} alt={props.name} />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
