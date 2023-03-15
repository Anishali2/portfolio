import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AnimatedCursor from 'react-animated-cursor'
import Loader from '../WebLoaders/Web1Loader'

const WEB1 = () => {
  const dispatch = useDispatch()
  const webVersion = useSelector((state: any) => state.web)
  const loader = useSelector((state: any) => state.loading)
  const router = useRouter()
  const convertWEB = (value: number) => {
    router.push('/')
    dispatch({
      type: 'CHANGE_WEB',
      payload: {
        web: value,
        loading: true
      }
    })
  }
  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: 'CHANGE_LOADING',
        payload: {
          loading: false
        }
      })
    }, 2000)
  }, [webVersion])

  return (
    <div
      style={{
        backgroundColor: '#000',
        height: '100vh'
      }}
    >
      {loader ? (
        <Loader />
      ) : (
        <>
          {' '}
          <div
            style={{
              backgroundColor: '#000',
              color: '#fff',
              fontFamily: 'Courier New, Courier, monospace',
              fontSize: '16px',
              height: '100vh'
            }}
          >
            <h1 style={{ textAlign: 'center' }}>Anish Ali</h1>
            <p
              style={{
                margin: '50px auto',
                maxWidth: '800px',
                textAlign: 'justify'
              }}
            >
              I’m Anish, currently I live in Pakistan working as a senior MERN
              Stack developer at Netixsol. My projects include UI animations,
              Node js, TypeScript, Next js, and Web 3 integration. If you’re
              interested in the tools and software I use check out my uses page.
            </p>
            <table style={{ margin: '50px auto', border: '1px solid #fff' }}>
              <thead>
                <tr>
                  <th style={{ float: 'left' }}>Skills</th>
                  <th>Experience</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style={{ width: '130px' }}>HTML </td>
                  <td>3 years</td>
                </tr>
                <tr>
                  <td>CSS</td>
                  <td>2 years</td>
                </tr>
                <tr>
                  <td>JAVASCRIPT</td>
                  <td>2 years</td>
                </tr>
              </tbody>
            </table>
            <br />

            <h1 style={{ textAlign: 'center' }}>Contact</h1>
            <ul style={{ maxWidth: '800px', margin: '10px auto' }}>
              <li>Email: ansihali1221@gmail.com</li>
              <li>Phone: +92-304-9050679</li>
            </ul>
            <div style={{ margin: '50px auto', maxWidth: '800px' }}>
              <label
                htmlFor="webVersionSelect"
                style={{ color: '#fff', marginRight: '10px' }}
              >
                Select Web Version:
              </label>
              <select
                className="select !focus:border focus:border-white focus:rounded-none active:border-none"
                onChange={(e) => convertWEB(Number(e.target.value))}
              >
                <option value={1}>Web 1.0</option>
                <option value={2}>Web 2.0</option>
                {/* <option value={3}>Web 3.0</option> */}
              </select>
            </div>
          </div>
          <AnimatedCursor
            color={'255,255,255'}
            innerSize={8}
            outerSize={35}
            innerScale={1}
            outerScale={1.7}
            outerAlpha={0}
            outerStyle={{
              border: `0px solid #000`
            }}
            innerStyle={{
              borderRadius: 'none'
            }}
          />
        </>
      )}
    </div>
  )
}

export default WEB1
