/* eslint-disable */
import {Sky, PointerLockControls} from '@react-three/drei'
import {Ground} from './Ground.jsx'
import {Player} from './Player.jsx'
import {Physics} from '@react-three/rapier'
import { Cubes } from './Cubes.jsx'
import { WeaponModel } from './WeaponModel.jsx'

export const App = () => {

  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <Cubes />
      </Physics>
      <group position={[0, 3,0]}>
        <WeaponModel/>
      </group>
    </>
  )
}

export default App
