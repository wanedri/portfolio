'use client';
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef,useEffect, use } from "react";
import { useAnimations, useFBX, useGLTF } from "@react-three/drei";
import * as THREE from "three";

export default function Avatar({wave,setWave,index,...props}) {
  const avatar = useGLTF('../portfolio/models/avatar_animations.glb');
  const { actions, names } = useAnimations(avatar.animations,avatar.scene);

  useEffect(() => {
      actions[names[index]]?.reset().fadeIn(0.5).play();

      return () => {
        actions[names[index]]?.fadeOut(0.5);
      }

  }, [index,wave]);

  return (
    <group>
      <primitive object={avatar.scene} {...props} />
    </group>
  )
}