import { getAllUsers } from '@/utils/features'
import styles from './page.module.css'
import Link from 'next/link';

export const metadata = {
  title: 'Users',
}

export default async function Home() {
  const users = await getAllUsers()
  return (
    <div className='flex col gp-4'>
      {users?.map((user)=>{
        return <Link id={user.id} href={`/user/${user.id}`}>{user.name}</Link>
      })}
    </div>
  )
}
