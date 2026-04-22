'use client'
  import { Button } from '@/components/ui/button'
import { toast } from 'sonner'
  
  
  export default function page() {
    return (
      <Button variant="default" onClick={() => {toast("Hello world")}}>page</Button>
    )
  }
