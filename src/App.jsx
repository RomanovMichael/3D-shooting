/* eslint-disable */
import {Sky, PointerLockControls} from '@react-three/drei'
import {Ground} from './Ground.jsx'
import {Player} from "./Player.jsx";
import {Physics, RigidBody} from '@react-three/rapier'

export const App = () => {

  return (
    <>
      <PointerLockControls />
      <Sky sunPosition={[100, 20, 100]} />
      <ambientLight intensity={1.5} />
      <Physics gravity={[0, -20, 0]}>
        <Ground />
        <Player />
        <RigidBody>
          <mesh position={[0, 3, -5]}>
            <boxGeometry />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  )
}



export default App
