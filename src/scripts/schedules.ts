import {
  BETHESDA,
  DEVOLVER_DIGITAL,
  ICompany,
  KINDA_FUNNY_SHOWCASE,
  LIMITED_RUN,
  MICROSOFT,
  NINTENDO_DIRECT,
  PC_GAMING,
  SQUARE_ENIX,
  UBISOFT,
  UPLOADVR,
} from './companies'

interface ISchedule {
  company: ICompany
  time: Date
}

const getDate = (
  day: number,
  month: number,
  year: number,
  hour: number,
  minute: number,
) => new Date(`${day} ${month} ${year} ${hour}:${minute} UTC`)

export const SCHEDULES: { [key: string]: ISchedule[] } = {
  '2019': [
    {
      company: MICROSOFT,
      time: getDate(9, 6, 2019, 20, 0),
    },
    {
      company: BETHESDA,
      time: getDate(10, 6, 2019, 0, 30),
    },
    {
      company: DEVOLVER_DIGITAL,
      time: getDate(10, 6, 2019, 2, 0),
    },
    {
      company: UPLOADVR,
      time: getDate(10, 6, 2019, 16, 0),
    },
    {
      company: PC_GAMING,
      time: getDate(10, 6, 2019, 17, 0),
    },
    {
      company: LIMITED_RUN,
      time: getDate(10, 6, 2019, 19, 0),
    },
    {
      company: UBISOFT,
      time: getDate(10, 6, 2019, 20, 0),
    },
    {
      company: KINDA_FUNNY_SHOWCASE,
      time: getDate(10, 6, 2019, 23, 30),
    },
    {
      company: SQUARE_ENIX,
      time: getDate(11, 6, 2019, 1, 0),
    },
    {
      company: NINTENDO_DIRECT,
      time: getDate(11, 6, 2019, 16, 0),
    },
  ],
}
