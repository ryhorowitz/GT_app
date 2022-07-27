import { useState } from "react";
import UpdateModal from "./UpdateModal";

function Home() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <h1>Home</h1>
      {/* <button onClick={() => setIsOpen(true)}
      >Open Model</button>

      <UpdateModal open={isOpen} onClose={() => setIsOpen(false)}>
        Fancy Modal
      </UpdateModal> */}
    </>
  )
}

export default Home;