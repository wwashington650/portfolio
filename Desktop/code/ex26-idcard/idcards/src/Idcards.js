import Idcard from "./Idcard";
import completedata from "./Data.json"



const Idcards = () => {
console.log(completedata.data);
    return (
         <div>
            {
                completedata.data.map( (elem) => {
                    return <Idcard name={elem.name} state={elem.des} age={elem.age}/>
                })
            }
        {/* <Idcard/>     */}
        </div>
     );
}
 
export default Idcards;
