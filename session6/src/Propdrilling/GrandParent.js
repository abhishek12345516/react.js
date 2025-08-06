import Parent from './Parent';
// import Child from './Child';
function GrandParent({ name }) {
    return ( 
        <div>
            <h1>GrandParent</h1>
            <Parent name={name}/>
        </div>
     );
}

export default GrandParent;