import { useSearchParams } from 'react-router-dom'

function Pay() {
    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get('id') || '';
    const name = searchParams.get('name') || '';
    const cost = searchParams.get('uuid') || '';
 
  return (
    <div>Pay</div>
  )
}