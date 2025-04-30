import './orderedList.css'

interface OrderedListProps{
    list: string[]
}

export function OrderedList({list}:OrderedListProps){
return(
    <ol className = 'orderedList'>
        {
            list.map((item)=>{
                return <li>{item}</li>
            })
        }
    </ol>
)

}