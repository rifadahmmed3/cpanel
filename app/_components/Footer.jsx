import React from 'react'

import Image from 'next/image';

function Footer() {
  return (
    
    <footer className="bg-gray-100 dark:bg-gray-900 mt-5 ">
        <div className=" mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 ">
            <div className="flex justify-center text-teal-600 dark:text-teal-300">
            <Image src="/logo.png" alt='logo' 
                width={200}
                height={300}
                />
                
            </div>

            <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum
            itaque neque.
            </p>
{/* 
            <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
            <li>
                <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                >
                About
                </a>
            </li>

            <li>
                <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                >
                Careers
                </a>
            </li>

            <li>
                <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                >
                History
                </a>
            </li>

            <li>
                <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                >
                Services
                </a>
            </li>

            <li>
                <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                >
                Projects
                </a>
            </li>

            <li>
                <a
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                href="#"
                >
                Blog
                </a>
            </li>
            </ul> */}

            <div className='flex-col flex items-center justify-center gap-4 mt-7'>
                <div className='flex gap-1'>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMTQgNCBDIDguNDg4NjY2MSA0IDQgOC40ODg2NjYxIDQgMTQgTCA0IDM2IEMgNCA0MS41MTEzMzQgOC40ODg2NjYxIDQ2IDE0IDQ2IEwgMzYgNDYgQyA0MS41MTEzMzQgNDYgNDYgNDEuNTExMzM0IDQ2IDM2IEwgNDYgMTQgQyA0NiA4LjQ4ODY2NjEgNDEuNTExMzM0IDQgMzYgNCBMIDE0IDQgeiBNIDE0IDYgTCAzNiA2IEMgNDAuNDMwNjY2IDYgNDQgOS41NjkzMzM5IDQ0IDE0IEwgNDQgMzYgQyA0NCA0MC40MzA2NjYgNDAuNDMwNjY2IDQ0IDM2IDQ0IEwgMTQgNDQgQyA5LjU2OTMzMzkgNDQgNiA0MC40MzA2NjYgNiAzNiBMIDYgMTQgQyA2IDkuNTY5MzMzOSA5LjU2OTMzMzkgNiAxNCA2IHogTSAxMyAxNSBDIDExLjM1NTAzIDE1IDEwIDE2LjM1NTAzIDEwIDE4IEwgMTAgMzIgQyAxMCAzMy42NDQ5NyAxMS4zNTUwMyAzNSAxMyAzNSBMIDM3IDM1IEMgMzguNjQ0OTcgMzUgNDAgMzMuNjQ0OTcgNDAgMzIgTCA0MCAxOCBDIDQwIDE2LjM1NTAzIDM4LjY0NDk3IDE1IDM3IDE1IEwgMTMgMTUgeiBNIDEzLjQxNDA2MiAxNyBMIDM2LjU4Mzk4NCAxNyBMIDI3LjY3NzczNCAyNS44OTI1NzggQyAyNi4xODQ5NCAyNy4zODI5ODQgMjMuNzk2ODM0IDI3LjM4MjgxOSAyMi4zMDQ2ODggMjUuODkwNjI1IEwgMTMuNDE0MDYyIDE3IHogTSAzOCAxOC40MTIxMDkgTCAzOCAzMS41ODc4OTEgTCAzMS40MDIzNDQgMjUgTCAzOCAxOC40MTIxMDkgeiBNIDEyIDE4LjQxNDA2MiBMIDE4LjU4NTkzOCAyNSBMIDEyIDMxLjU4NTkzOCBMIDEyIDE4LjQxNDA2MiB6IE0gMjkuOTg4MjgxIDI2LjQxMjEwOSBMIDM2LjU4NTkzOCAzMyBMIDEzLjQxNDA2MiAzMyBMIDIwIDI2LjQxNDA2MiBMIDIwLjg5MDYyNSAyNy4zMDQ2ODggQyAyMy4xNDY0NzggMjkuNTYwNTQgMjYuODMyNjM4IDI5LjU2MjE5NCAyOS4wODk4NDQgMjcuMzA4NTk0IEwgMjkuOTg4MjgxIDI2LjQxMjEwOSB6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
                    <h2>brightsmartshop.bd@gmail.com</h2>
                </div>

                <div className='flex gap-1'>
                    <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMTQgMy45OTAyMzQ0IEMgOC40ODg2NjYxIDMuOTkwMjM0NCA0IDguNDc4OTAwOCA0IDEzLjk5MDIzNCBMIDQgMzUuOTkwMjM0IEMgNCA0MS41MDE1NjggOC40ODg2NjYxIDQ1Ljk5MDIzNCAxNCA0NS45OTAyMzQgTCAzNiA0NS45OTAyMzQgQyA0MS41MTEzMzQgNDUuOTkwMjM0IDQ2IDQxLjUwMTU2OCA0NiAzNS45OTAyMzQgTCA0NiAxMy45OTAyMzQgQyA0NiA4LjQ3ODkwMDggNDEuNTExMzM0IDMuOTkwMjM0NCAzNiAzLjk5MDIzNDQgTCAxNCAzLjk5MDIzNDQgeiBNIDE0IDUuOTkwMjM0NCBMIDM2IDUuOTkwMjM0NCBDIDQwLjQzMDY2NiA1Ljk5MDIzNDQgNDQgOS41NTk1Njg3IDQ0IDEzLjk5MDIzNCBMIDQ0IDM1Ljk5MDIzNCBDIDQ0IDQwLjQyMDkgNDAuNDMwNjY2IDQzLjk5MDIzNCAzNiA0My45OTAyMzQgTCAxNCA0My45OTAyMzQgQyA5LjU2OTMzMzkgNDMuOTkwMjM0IDYgNDAuNDIwOSA2IDM1Ljk5MDIzNCBMIDYgMTMuOTkwMjM0IEMgNiA5LjU1OTU2ODcgOS41NjkzMzM5IDUuOTkwMjM0NCAxNCA1Ljk5MDIzNDQgeiBNIDE4LjA0ODgyOCAxMS4wMzUxNTYgQyAxNi4wMDM1MDQgMTAuOTQ2Nzc2IDE0LjQ1MTEzIDExLjcyMzkyMiAxMy40NzQ2MDkgMTIuNjU4MjAzIEMgMTIuOTg2MzQ5IDEzLjEyNTM0MyAxMi42MzM4MzIgMTMuNjI1MTc5IDEyLjM5MjU3OCAxNC4wOTE3OTcgQyAxMi4xNTEzMjQgMTQuNTU4NDE1IDExLjk5ODA0NyAxNC45NDMxMDggMTEuOTk4MDQ3IDE1LjQ0MzM1OSBDIDExLjk5ODA0NyAxNS4zOTg3OTkgMTEuOTg3MDU5IDE1LjYzMjY4NCAxMS45ODA0NjkgMTUuOTA0Mjk3IEMgMTEuOTczODY5IDE2LjE3NTkxIDExLjk3NTA3IDE2LjU0MjA0NSAxMiAxNi45ODQzNzUgQyAxMi4wNDk5NiAxNy44NjkwMzYgMTIuMTk5ODk3IDE5LjA2NTY3NyAxMi41OTc2NTYgMjAuNDg0Mzc1IEMgMTMuMzkzMTc0IDIzLjMyMTc3MSAxNS4xODQ0NDYgMjcuMDQzODIxIDE5LjA3MDMxMiAzMC45Mjk2ODggQyAyMi45NTYxOCAzNC44MTU1NTQgMjYuNjc4MDE0IDM2LjYwNjU3NSAyOS41MTU2MjUgMzcuNDAyMzQ0IEMgMzAuOTM0NDMgMzcuODAwMjI4IDMyLjEzMDg4MSAzNy45NDk5MzcgMzMuMDE1NjI1IDM4IEMgMzMuNDU3OTk3IDM4LjAyNTAzIDMzLjgyMjEwNSAzOC4wMjYwOTEgMzQuMDkzNzUgMzguMDE5NTMxIEMgMzQuMzY1Mzk1IDM4LjAxMjkzMSAzNC42MDEwNDkgMzguMDAxOTUzIDM0LjU1NjY0MSAzOC4wMDE5NTMgQyAzNS4wNTY4OTIgMzguMDAxOTUzIDM1LjQ0MTU4NSAzNy44NDg2NzYgMzUuOTA4MjAzIDM3LjYwNzQyMiBDIDM2LjM3NDgyMSAzNy4zNjYxNjggMzYuODc0NjU3IDM3LjAxMzY1MSAzNy4zNDE3OTcgMzYuNTI1MzkxIEMgMzguMjc2MDc4IDM1LjU0ODg3IDM5LjA1MzIyMiAzMy45OTY0OTYgMzguOTY0ODQ0IDMxLjk1MTE3MiBDIDM4LjkyMjkwNyAzMC45NzU2OTMgMzguMzgxMzE2IDMwLjExMTg1OCAzNy41ODIwMzEgMjkuNTk5NjA5IEMgMzYuOTY0MzUgMjkuMjAzODE0IDM2LjAwNTQ1OCAyOC41ODk0MTUgMzQuNzUzOTA2IDI3Ljc4OTA2MiBDIDMzLjMwMTgxMSAyNi44NjEyOTkgMzEuNDQ0NTEgMjYuNzk1MDI5IDI5LjkyOTY4OCAyNy42MjUgTCAzMC4wMTU2MjUgMjcuNTgyMDMxIEwgMjguODM3ODkxIDI4LjA4Nzg5MSBMIDI4Ljc1MTk1MyAyOC4xNDg0MzggQyAyOC40NjU2OTMgMjguMzQ5NDI4IDI4LjExMTE1NCAyOC4zODY2NjQgMjcuNzg5MDYyIDI4LjI1MTk1MyBDIDI2Ljg4NjgxMyAyNy44NzQ2NDkgMjUuNDgwOTg1IDI3LjEzMzMyOSAyNC4xNzM4MjggMjUuODI2MTcyIEMgMjIuODY2NjcxIDI0LjUxOTAxNSAyMi4xMjUzNTEgMjMuMTEzMTg2IDIxLjc0ODA0NyAyMi4yMTA5MzggQyAyMS42MTMzMzYgMjEuODg4ODQ1IDIxLjY1MDU2OCAyMS41MzQzMDcgMjEuODUxNTYyIDIxLjI0ODA0NyBMIDIxLjkxMjEwOSAyMS4xNjIxMDkgTCAyMi40MTc5NjkgMTkuOTg0Mzc1IEwgMjIuMzc1IDIwLjA3MDMxMiBDIDIzLjIwNDc2NCAxOC41NTU4NjggMjMuMTQwMjQ4IDE2LjY5ODYxOSAyMi4yMTA5MzggMTUuMjQ2MDk0IEMgMjEuNDEwNTg0IDEzLjk5NDU0MiAyMC43OTYxODYgMTMuMDM1NjUgMjAuNDAwMzkxIDEyLjQxNzk2OSBDIDE5Ljg4ODE0MiAxMS42MTg2ODQgMTkuMDI0MzEgMTEuMDc3MDk2IDE4LjA0ODgyOCAxMS4wMzUxNTYgeiBNIDE3Ljk2Mjg5MSAxMy4wMzMyMDMgQyAxOC4yNDM0MDkgMTMuMDQ1MjYzIDE4LjUzMzA0NSAxMy4yMDkzNzggMTguNzE2Nzk3IDEzLjQ5NjA5NCBDIDE5LjExMzAwMSAxNC4xMTQ0MTMgMTkuNzI3Njk2IDE1LjA3Mzc3IDIwLjUyNzM0NCAxNi4zMjQyMTkgQyAyMS4wNTgwMzMgMTcuMTUzNjk0IDIxLjA5NTMzIDE4LjI0MzgyMSAyMC42MjEwOTQgMTkuMTA5Mzc1IEwgMjAuNTk3NjU2IDE5LjE1MjM0NCBMIDIwLjExNTIzNCAyMC4yNzkyOTcgTCAyMC4yMTQ4NDQgMjAuMDk3NjU2IEMgMTkuNjIzODM1IDIwLjkzOTM5NiAxOS41MDUwNTUgMjIuMDMyNTE0IDE5LjkwMjM0NCAyMi45ODI0MjIgQyAyMC4zNTMwNCAyNC4wNjAxNzMgMjEuMjE0OTIzIDI1LjY5NTM5MiAyMi43NTk3NjYgMjcuMjQwMjM0IEMgMjQuMzA0NjA4IDI4Ljc4NTA3NyAyNS45Mzk4MjcgMjkuNjQ2OTYgMjcuMDE3NTc4IDMwLjA5NzY1NiBDIDI3Ljk2NzQ4NiAzMC40OTQ5NDUgMjkuMDYwNjA0IDMwLjM3NjE2NSAyOS45MDIzNDQgMjkuNzg1MTU2IEwgMjkuNzIwNzAzIDI5Ljg4NDc2NiBMIDMwLjg0NzY1NiAyOS40MDIzNDQgTCAzMC44OTA2MjUgMjkuMzc4OTA2IEMgMzEuNzU1ODAxIDI4LjkwNDg3NyAzMi44NDU4NzcgMjguOTQ0Mzc1IDMzLjY3NTc4MSAyOS40NzQ2MDkgTCAzMy42NzU3ODEgMjkuNDcyNjU2IEMgMzQuOTI2MjMgMzAuMjcyMzA0IDM1Ljg4NTU4NyAzMC44ODY5OTkgMzYuNTAzOTA2IDMxLjI4MzIwMyBDIDM2Ljc5MDYyMiAzMS40NjY5NTUgMzYuOTU0NzM2IDMxLjc1NjU5MSAzNi45NjY3OTcgMzIuMDM3MTA5IEMgMzcuMDMyNDE3IDMzLjU1NTc4NSAzNi41MDQ5NTQgMzQuNTA2NTk5IDM1Ljg5NjQ4NCAzNS4xNDI1NzggQyAzNS41OTIyNSAzNS40NjA1NjggMzUuMjYyMzM1IDM1LjY5MTM0OCAzNC45OTAyMzQgMzUuODMyMDMxIEMgMzQuNzE4MTMzIDM1Ljk3MjcxNSAzNC40NTc4ODkgMzYuMDAxOTUzIDM0LjU1NjY0MSAzNi4wMDE5NTMgQyAzNC4zNzMyMzIgMzYuMDAxOTUzIDM0LjI3NjYzMyAzNi4wMTM5ODEgMzQuMDQ2ODc1IDM2LjAxOTUzMSBDIDMzLjgxNzExNyAzNi4wMjUxMzEgMzMuNTA5MTQ0IDM2LjAyNTQzNiAzMy4xMjg5MDYgMzYuMDAzOTA2IEMgMzIuMzY4NDMxIDM1Ljk2MDg3NiAzMS4zMTg3NTcgMzUuODMxMDUzIDMwLjA1NDY4OCAzNS40NzY1NjIgQyAyNy41MjY1NDcgMzQuNzY3NTgxIDI0LjEzNzUwOSAzMy4xNjg3NTkgMjAuNDg0Mzc1IDI5LjUxNTYyNSBDIDE2LjgzMTI0MSAyNS44NjI0OTEgMTUuMjMyMTY5IDIyLjQ3MzE2NyAxNC41MjM0MzggMTkuOTQ1MzEyIEMgMTQuMTY5MDcxIDE4LjY4MTM4NiAxNC4wMzkwMzcgMTcuNjMxNDY0IDEzLjk5NjA5NCAxNi44NzEwOTQgQyAxMy45NzQ2MjQgMTYuNDkwOTA4IDEzLjk3NDg5OSAxNi4xODI4NiAxMy45ODA0NjkgMTUuOTUzMTI1IEMgMTMuOTg2MDY5IDE1LjcyMzM5IDEzLjk5ODA0NyAxNS42MjY5MTggMTMuOTk4MDQ3IDE1LjQ0MzM1OSBDIDEzLjk5ODA0NyAxNS41NDIxMDkgMTQuMDI3Mjg3IDE1LjI4MTg2NyAxNC4xNjc5NjkgMTUuMDA5NzY2IEMgMTQuMzA4NjUyIDE0LjczNzY2NSAxNC41Mzk0MzIgMTQuNDA3NzUgMTQuODU3NDIyIDE0LjEwMzUxNiBDIDE1LjQ5MzQwMSAxMy40OTUwNDYgMTYuNDQ0MjE1IDEyLjk2NzU4MSAxNy45NjI4OTEgMTMuMDMzMjAzIHoiPjwvcGF0aD4KPC9zdmc+"/>
                    <h2>+8801973629512</h2>
                </div>

            </div>

            <ul className="mt-5 flex justify-center gap-2 md:gap-4">
            <li>
                <a
                href="https://m.facebook.com/groups/1064935277990833/?ref=share&mibextid=NSMWBT"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                <span className="sr-only">Facebook</span>
                <Image alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMjUgMiBDIDEyLjMwOTI5NSAyIDIgMTIuMzA5Mjk1IDIgMjUgQyAyIDM3LjY5MDcwNSAxMi4zMDkyOTUgNDggMjUgNDggQyAzNy42OTA3MDUgNDggNDggMzcuNjkwNzA1IDQ4IDI1IEMgNDggMTIuMzA5Mjk1IDM3LjY5MDcwNSAyIDI1IDIgeiBNIDI1IDQgQyAzNi42MDk4MjQgNCA0NiAxMy4zOTAxNzYgNDYgMjUgQyA0NiAzNi42MDk4MjQgMzYuNjA5ODI0IDQ2IDI1IDQ2IEMgMTMuMzkwMTc2IDQ2IDQgMzYuNjA5ODI0IDQgMjUgQyA0IDEzLjM5MDE3NiAxMy4zOTAxNzYgNCAyNSA0IHogTSAyNi41ODAwNzggMTAgQyAyMy45MjgyMiAxMCAyMS45MTcwNzYgMTAuODY3MjE3IDIwLjY3NzczNCAxMi40MDAzOTEgQyAxOS40MzgzOTMgMTMuOTMzNTY0IDE5IDE1Ljk4MTA0NiAxOSAxOC4yMjY1NjIgTCAxOSAyMCBMIDE3IDIwIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNiAyMSBMIDE2IDI2IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNyAyNyBMIDE5IDI3IEwgMTkgMzkgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIwIDQwIEwgMjYgNDAgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDI3IDM5IEwgMjcgMjcgTCAzMSAyNyBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMzEuOTgwNDY5IDI2LjE5NTMxMiBMIDMyLjk4MDQ2OSAyMS4xOTUzMTIgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDMyIDIwIEwgMjcgMjAgTCAyNyAxNy44MDY2NDEgQyAyNyAxNy4zMjE2MTcgMjcuMDMxMzcgMTcuMzI1NjE0IDI3LjE3MTg3NSAxNy4yMzQzNzUgQyAyNy4zMTIzODUgMTcuMTQzMTM2IDI3LjgyMDE5NyAxNyAyOC43MTA5MzggMTcgTCAzMiAxNyBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMzMgMTYgTCAzMyAxMiBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMzIuMzM1OTM4IDExLjA1ODU5NCBDIDMyLjMzNTkzOCAxMS4wNTg1OTQgMjkuNDU2MzM3IDEwIDI2LjU4MDA3OCAxMCB6IE0gMjYuNTgwMDc4IDEyIEMgMjguNDcyNDk5IDEyIDMwLjIyNzUwMSAxMi41MTA0NDcgMzEgMTIuNzUxOTUzIEwgMzEgMTUgTCAyOC43MTA5MzggMTUgQyAyNy42NjM2NzcgMTUgMjYuODEzOTc0IDE1LjA4NDU4IDI2LjA4Mzk4NCAxNS41NTg1OTQgQyAyNS4zNTM5OTUgMTYuMDMyNjA1IDI1IDE2Ljk0MDY2NCAyNSAxNy44MDY2NDEgTCAyNSAyMSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMjYgMjIgTCAzMC43NzkyOTcgMjIgTCAzMC4xNzk2ODggMjUgTCAyNiAyNSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMjUgMjYgTCAyNSAzOCBMIDIxIDM4IEwgMjEgMjYgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDIwIDI1IEwgMTggMjUgTCAxOCAyMiBMIDIwIDIyIEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAyMSAyMSBMIDIxIDE4LjIyNjU2MiBDIDIxIDE2LjI0NzA4IDIxLjQwNTAxNCAxNC42ODE3NzkgMjIuMjMyNDIyIDEzLjY1ODIwMyBDIDIzLjA1OTgzIDEyLjYzNDYyNyAyNC4zMzY5MzYgMTIgMjYuNTgwMDc4IDEyIHoiPjwvcGF0aD4KPC9zdmc+" width={30}
                height={30}/>
                </a>
            </li>

            <li>
                <a
                href="https://chat.whatsapp.com/Ix7VLMNPuFB39hjEXSlO60"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:text-gray-700/75 dark:text-white dark:hover:text-white/75"
                >
                <span className="sr-only">WhatsApp</span>
                <Image alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNTAiIGhlaWdodD0iNTAiIHZpZXdCb3g9IjAgMCA1MCA1MCI+CjxwYXRoIGQ9Ik0gMjUgMiBDIDEyLjMwOTUzNCAyIDIgMTIuMzA5NTM0IDIgMjUgQyAyIDI5LjA3OTA5NyAzLjExODY4NzUgMzIuODg1ODggNC45ODQzNzUgMzYuMjA4OTg0IEwgMi4wMzcxMDk0IDQ2LjczMDQ2OSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMy4yNDAyMzQ0IDQ3Ljk3MDcwMyBMIDE0LjIxMDkzOCA0NS4yNTE5NTMgQyAxNy40MzQ2MjkgNDYuOTcyOTI5IDIxLjA5MjU5MSA0OCAyNSA0OCBDIDM3LjY5MDQ2NiA0OCA0OCAzNy42OTA0NjYgNDggMjUgQyA0OCAxMi4zMDk1MzQgMzcuNjkwNDY2IDIgMjUgMiB6IE0gMjUgNCBDIDM2LjYwOTUzNCA0IDQ2IDEzLjM5MDQ2NiA0NiAyNSBDIDQ2IDM2LjYwOTUzNCAzNi42MDk1MzQgNDYgMjUgNDYgQyAyMS4yNzgwMjUgNDYgMTcuNzkyMTIxIDQ1LjAyOTYzNSAxNC43NjE3MTkgNDMuMzMzOTg0IEEgMS4wMDAxIDEuMDAwMSAwIDAgMCAxNC4wMzMyMDMgNDMuMjM2MzI4IEwgNC40MjU3ODEyIDQ1LjYxNzE4OCBMIDcuMDAxOTUzMSAzNi40MjU3ODEgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDYuOTAyMzQzOCAzNS42NDY0ODQgQyA1LjA2MDY4NjkgMzIuNTIzNTkyIDQgMjguODkwMTA3IDQgMjUgQyA0IDEzLjM5MDQ2NiAxMy4zOTA0NjYgNCAyNSA0IHogTSAxNi42NDI1NzggMTMgQyAxNi4wMDE1MzkgMTMgMTUuMDg2MDQ1IDEzLjIzODQ5IDE0LjMzMzk4NCAxNC4wNDg4MjggQyAxMy44ODIyNjggMTQuNTM1NTQ4IDEyIDE2LjM2OTUxMSAxMiAxOS41OTM3NSBDIDEyIDIyLjk1NTI3MSAxNC4zMzEzOTEgMjUuODU1ODQ4IDE0LjYxMzI4MSAyNi4yMjg1MTYgTCAxNC42MTUyMzQgMjYuMjI4NTE2IEwgMTQuNjE1MjM0IDI2LjIzMDQ2OSBDIDE0LjU4ODQ5NCAyNi4xOTUzMjkgMTQuOTczMDMxIDI2Ljc1MjE5MSAxNS40ODYzMjggMjcuNDE5OTIyIEMgMTUuOTk5NjI2IDI4LjA4NzY1MyAxNi43MTc0MDUgMjguOTY0NjQgMTcuNjE5MTQxIDI5LjkxNDA2MiBDIDE5LjQyMjYxMiAzMS44MTI5MDkgMjEuOTU4MjgyIDM0LjAwNzQxOSAyNS4xMDU0NjkgMzUuMzQ5NjA5IEMgMjYuNTU0Nzg5IDM1Ljk2Njc3OSAyNy42OTgxNzkgMzYuMzM5NDE3IDI4LjU2NDQ1MyAzNi42MTEzMjggQyAzMC4xNjk4NDUgMzcuMTE1NDI2IDMxLjYzMjA3MyAzNy4wMzg3OTkgMzIuNzMwNDY5IDM2Ljg3Njk1MyBDIDMzLjU1MjYzIDM2Ljc1NTg3NiAzNC40NTY4NzggMzYuMzYxMTE0IDM1LjM1MTU2MiAzNS43OTQ5MjIgQyAzNi4yNDYyNDggMzUuMjI4NzMgMzcuMTIzMDkgMzQuNTI0NzIyIDM3LjUwOTc2NiAzMy40NTUwNzggQyAzNy43ODY3NzIgMzIuNjg4MjQ0IDM3LjkyNzU5MSAzMS45Nzk1OTggMzcuOTc4NTE2IDMxLjM5NjQ4NCBDIDM4LjAwMzk3NiAzMS4xMDQ5MjcgMzguMDA3MjExIDMwLjg0NzYwMiAzNy45ODgyODEgMzAuNjA5Mzc1IEMgMzcuOTY5MzExIDMwLjM3MTE0OCAzNy45ODk1ODEgMzAuMTg4NjY0IDM3Ljc2NzU3OCAyOS44MjQyMTkgQyAzNy4zMDIwMDkgMjkuMDU5ODA0IDM2Ljc3NDc1MyAyOS4wMzk4NTMgMzYuMjI0NjA5IDI4Ljc2NzU3OCBDIDM1LjkxODkzOSAyOC42MTYyOTcgMzUuMDQ4NjYxIDI4LjE5MTMyOSAzNC4xNzU3ODEgMjcuNzc1MzkxIEMgMzMuMzAzODgzIDI3LjM1OTkyIDMyLjU0ODkyIDI2Ljk5MTk1MyAzMi4wODM5ODQgMjYuODI2MTcyIEMgMzEuNzkwMjM5IDI2LjcyMDQ4OCAzMS40MzE1NTYgMjYuNTY4MzUyIDMwLjkxNDA2MiAyNi42MjY5NTMgQyAzMC4zOTY1NjkgMjYuNjg1NTUzIDI5Ljg4NTQ2IDI3LjA1ODkzMyAyOS41ODc4OTEgMjcuNSBDIDI5LjMwNTgzNyAyNy45MTgwNjkgMjguMTcwMzg3IDI5LjI1ODM0OSAyNy44MjQyMTkgMjkuNjUyMzQ0IEMgMjcuODE5NjE5IDI5LjY0OTU0NCAyNy44NDk2NTkgMjkuNjYzMzgzIDI3LjcxMjg5MSAyOS41OTU3MDMgQyAyNy4yODQ3NjEgMjkuMzgzODE1IDI2Ljc2MTE1NyAyOS4yMDM2NTIgMjUuOTg2MzI4IDI4Ljc5NDkyMiBDIDI1LjIxMTUgMjguMzg2MTkyIDI0LjI0MjI1NSAyNy43ODI2MzUgMjMuMTgxNjQxIDI2Ljg0NzY1NiBMIDIzLjE4MTY0MSAyNi44NDU3MDMgQyAyMS42MDMwMjkgMjUuNDU1OTQ5IDIwLjQ5NzI3MiAyMy43MTExMDYgMjAuMTQ4NDM4IDIzLjEyNSBDIDIwLjE3MTkzNyAyMy4wOTcwNCAyMC4xNDU2NDMgMjMuMTMwOTAxIDIwLjE5NTMxMiAyMy4wODIwMzEgTCAyMC4xOTcyNjYgMjMuMDgwMDc4IEMgMjAuNTUzNzgxIDIyLjcyODkyNCAyMC44Njk3MzkgMjIuMzA5NTIxIDIxLjEzNjcxOSAyMi4wMDE5NTMgQyAyMS41MTUyNTcgMjEuNTY1ODY2IDIxLjY4MjMxIDIxLjE4MTQzNyAyMS44NjMyODEgMjAuODIyMjY2IEMgMjIuMjIzOTU0IDIwLjEwNjQ0IDIyLjAyMzEzIDE5LjMxODc0MiAyMS44MTQ0NTMgMTguOTA0Mjk3IEwgMjEuODE0NDUzIDE4LjkwMjM0NCBDIDIxLjgyODg2MyAxOC45MzEwMTQgMjEuNzAxNTcyIDE4LjY1MDE1NyAyMS41NjQ0NTMgMTguMzI2MTcyIEMgMjEuNDI2OTQzIDE4LjAwMTI2MyAyMS4yNTE2NjMgMTcuNTgwMDM5IDIxLjA2NDQ1MyAxNy4xMzA4NTkgQyAyMC42OTAwMzMgMTYuMjMyNTAxIDIwLjI3MjAyNyAxNS4yMjQ5MTIgMjAuMDIzNDM4IDE0LjYzNDc2NiBMIDIwLjAyMzQzOCAxNC42MzI4MTIgQyAxOS43MzA1OTEgMTMuOTM3Njg0IDE5LjMzNDM5NSAxMy40MzY5MDggMTguODE2NDA2IDEzLjE5NTMxMiBDIDE4LjI5ODQxNyAxMi45NTM3MTcgMTcuODQwNzc4IDEzLjAyMjQwMiAxNy44MjIyNjYgMTMuMDIxNDg0IEwgMTcuODIwMzEyIDEzLjAyMTQ4NCBDIDE3LjQ1MDY2OCAxMy4wMDQ0MzIgMTcuMDQ1MDM4IDEzIDE2LjY0MjU3OCAxMyB6IE0gMTYuNjQyNTc4IDE1IEMgMTcuMDI4MTE4IDE1IDE3LjQwODIxNCAxNS4wMDQ3MDEgMTcuNzI2NTYyIDE1LjAxOTUzMSBDIDE4LjA1NDA1NiAxNS4wMzU4NTEgMTguMDMzNjg3IDE1LjAzNzE5MiAxNy45NzA3MDMgMTUuMDA3ODEyIEMgMTcuOTA2NzEzIDE0Ljk3Nzk3MiAxNy45OTM1MzMgMTQuOTY4MjgyIDE4LjE3OTY4OCAxNS40MTAxNTYgQyAxOC40MjMwOTggMTUuOTg4MDEgMTguODQzMTcgMTYuOTk5MjQ5IDE5LjIxODc1IDE3LjkwMDM5MSBDIDE5LjQwNjU0IDE4LjM1MDk2MSAxOS41ODIyOTIgMTguNzczODE2IDE5LjcyMjY1NiAxOS4xMDU0NjkgQyAxOS44NjMwMjEgMTkuNDM3MTIyIDE5LjkzOTA3NyAxOS42MjIyOTUgMjAuMDI3MzQ0IDE5Ljc5ODgyOCBMIDIwLjAyNzM0NCAxOS44MDA3ODEgTCAyMC4wMjkyOTcgMTkuODAyNzM0IEMgMjAuMTE1ODM3IDE5Ljk3MzQ4MyAyMC4xMDgxODUgMTkuODY0MTY0IDIwLjA3ODEyNSAxOS45MjM4MjggQyAxOS44NjcwOTYgMjAuMzQyNjU2IDE5LjgzODQ2MSAyMC40NDU0OTMgMTkuNjI1IDIwLjY5MTQwNiBDIDE5LjI5OTk4IDIxLjA2NTgzOCAxOC45Njg0NTMgMjEuNDgzNDA0IDE4Ljc5Mjk2OSAyMS42NTYyNSBDIDE4LjYzOTQzOSAyMS44MDcwNyAxOC4zNjI0MiAyMi4wNDIwMzIgMTguMTg5NDUzIDIyLjUwMTk1MyBDIDE4LjAxNjIyMSAyMi45NjI1NzggMTguMDk3MDczIDIzLjU5NDU3IDE4LjM3NSAyNC4wNjY0MDYgQyAxOC43NDUwMzIgMjQuNjk0NiAxOS45NjQ0MDYgMjYuNjc5MzA3IDIxLjg1OTM3NSAyOC4zNDc2NTYgQyAyMy4wNTI3NiAyOS4zOTk2NzggMjQuMTY0NTYzIDMwLjA5NTkzMyAyNS4wNTI3MzQgMzAuNTY0NDUzIEMgMjUuOTQwOTA2IDMxLjAzMjk3MyAyNi42NjQzMDEgMzEuMzA2NjA3IDI2LjgyNjE3MiAzMS4zODY3MTkgQyAyNy4yMTA1NDkgMzEuNTc2OTUzIDI3LjYzMDY1NSAzMS43MjQ2NyAyOC4xMTkxNDEgMzEuNjY2MDE2IEMgMjguNjA3NjI3IDMxLjYwNzM2NiAyOS4wMjg3OCAzMS4zMTA5NzkgMjkuMjk2ODc1IDMxLjAwNzgxMiBMIDI5LjI5ODgyOCAzMS4wMDU4NTkgQyAyOS42NTU2MjkgMzAuNjAxMzQ3IDMwLjcxNTg0OCAyOS4zOTA3MjggMzEuMjI0NjA5IDI4LjY0NDUzMSBDIDMxLjI0NjE2OSAyOC42NTIxMzEgMzEuMjM5MTA5IDI4LjY0NjIzMSAzMS40MDgyMDMgMjguNzA3MDMxIEwgMzEuNDA4MjAzIDI4LjcwODk4NCBMIDMxLjQxMDE1NiAyOC43MDg5ODQgQyAzMS40ODczNTYgMjguNzM2NDc0IDMyLjQ1NDI4NiAyOS4xNjkyNjcgMzMuMzE2NDA2IDI5LjU4MDA3OCBDIDM0LjE3ODUyNiAyOS45OTA4ODkgMzUuMDUzNTYxIDMwLjQxNzg3NSAzNS4zMzc4OTEgMzAuNTU4NTk0IEMgMzUuNzQ4MjI1IDMwLjc2MTY3NCAzNS45NDIxMTMgMzAuODkzODgxIDM1Ljk5MjE4OCAzMC44OTQ1MzEgQyAzNS45OTU1NzIgMzAuOTgyNTE2IDM1Ljk5ODk5MiAzMS4wNzc4NiAzNS45ODYzMjggMzEuMjIyNjU2IEMgMzUuOTUxMjU4IDMxLjYyNDI5MiAzNS44NDM5IDMyLjE4MDIyNSAzNS42Mjg5MDYgMzIuNzc1MzkxIEMgMzUuNTIzNTgyIDMzLjA2Njc0NiAzNC45NzUwMTggMzMuNjY3NjYxIDM0LjI4MzIwMyAzNC4xMDU0NjkgQyAzMy41OTEzODggMzQuNTQzMjc3IDMyLjc0OTMzOCAzNC44NTI1MTQgMzIuNDM3NSAzNC44OTg0MzggQyAzMS40OTk4OTYgMzUuMDM2NTkxIDMwLjM4NjY3MiAzNS4wODcwMjcgMjkuMTY0MDYyIDM0LjcwMzEyNSBDIDI4LjMxNjMzNiAzNC40MzcwMzYgMjcuMjU5MzA1IDM0LjA5MjU5NiAyNS44OTA2MjUgMzMuNTA5NzY2IEMgMjMuMTE0ODEyIDMyLjMyNTk1NiAyMC43NTU1OTEgMzAuMzExNTEzIDE5LjA3MDMxMiAyOC41MzcxMDkgQyAxOC4yMjc2NzQgMjcuNjQ5OTA4IDE3LjU1MjU2MiAyNi44MjQwMTkgMTcuMDcyMjY2IDI2LjE5OTIxOSBDIDE2LjU5Mjg2NiAyNS41NzU1ODQgMTYuMzgzNTI4IDI1LjI1MTA1NCAxNi4yMDg5ODQgMjUuMDIxNDg0IEwgMTYuMjA3MDMxIDI1LjAxOTUzMSBDIDE1Ljg5NzIwMiAyNC42MDk4MDUgMTQgMjEuOTcwODUxIDE0IDE5LjU5Mzc1IEMgMTQgMTcuMDc3OTg5IDE1LjE2ODQ5NyAxNi4wOTE0MzYgMTUuODAwNzgxIDE1LjQxMDE1NiBDIDE2LjEzMjcyMSAxNS4wNTI0OTUgMTYuNDk1NjE3IDE1IDE2LjY0MjU3OCAxNSB6Ij48L3BhdGg+Cjwvc3ZnPg==" 
                width={30}
                height={30}/>
                </a>
            </li>

            </ul>

            

        </div>
        </footer>
    
  )
}

export default Footer