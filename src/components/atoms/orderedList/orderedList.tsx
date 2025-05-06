import './orderedList.css'

interface OrderedListProps{
    list: string[]
}

export function OrderedList({list}:OrderedListProps){
return(
    <ul className = 'orderedList'>
        {
            list.map((item)=>{
                return <li>{item}</li>
            })
        }
    </ul>
)

}