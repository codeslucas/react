// import { createContext, useContext, useState } from 'react'

// const CyclesContext = createContext({} as any)

// function NewCycleForm() {
//   const { activeCycle, setActiveCycle } = useContext(CyclesContext)

//   return (
//     <h1>
//       NewCycleForm: {activeCycle}
//       <button
//         onClick={() => {
//           setActiveCycle(2)
//         }}
//       >
//         Alternar ciclo ativo
//       </button>
//     </h1>
//   )
// }

// function Countdown() {
//   const { activeCycle } = useContext(CyclesContext)

//   return <h1>Countndown: {activeCycle}</h1>
// }

// export function Home() {
//   const [activeCycle, setActiveCycle] = useState(2)

//   return (
//     <CyclesContext.Provider value={{ activeCycle, setActiveCycle }}>
//       <div>
//         <NewCycleForm />
//         <Countdown />
//       </div>
//     </CyclesContext.Provider>
//   )
// }
