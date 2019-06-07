interface ICompany {
  name: string
  logo: string
}

const MICROSOFT = {
  name: 'Microsoft',
  logo: 'microsoft.svg',
}

const BETHESDA = {
  name: 'Bethesda',
  logo: 'bethesda.svg',
}

const DEVOLVER_DIGITAL = {
  name: 'Devolver Digital',
  logo: 'devolver_digital.svg',
}

const UPLOADVR = {
  name: 'UploadVR',
  logo: 'upload_vr.svg',
}

const PC_GAMING = {
  name: 'PC Gaming Show',
  logo: 'pc_gaming.svg',
}

const LIMITED_RUN = {
  name: 'Limited Run',
  logo: 'limited_run.svg',
}

const UBISOFT = {
  name: 'Ubisoft',
  logo: 'ubisoft.svg',
}

const KINDA_FUNNY_SHOWCASE = {
  name: 'Kinda Funny Showcase',
  logo: 'kinda_funny_showcase.svg',
}

const SQUARE_ENIX = {
  name: 'Square Enix',
  logo: 'square_enix.svg',
}

const NINTENDO_DIRECT = {
  name: 'Nintendo Direct',
  logo: 'nintendo_direct.svg',
}

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
) => new Date(`${month} ${day} ${year} ${hour}:${minute} UTC`)

// @ts-ignore
const SCHEDULE: ISchedule[] = [
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
]

class Conference {
  private schedule: ISchedule
  private el: string

  constructor(schedule: ISchedule) {
    this.schedule = schedule
    this.el = `
      <div class="conference">
        <div class="company">${schedule.company.name}</div>
        <div class="time">${this.getTime()}</div>
      </div>
    `
  }

  private getTime() {
    return Intl.DateTimeFormat(undefined, {
      hour: 'numeric',
      minute: 'numeric',
      timeZoneName: 'short',
    }).format(this.schedule.time)
  }

  public getDayOfMonth() {
    return Number(
      Intl.DateTimeFormat(undefined, {
        day: 'numeric',
      }).format(this.schedule.time),
    )
  }

  public appendTo(element: HTMLElement) {
    element.insertAdjacentHTML('beforeend', this.el)
  }
}

const updatePage = () => {
  const container = document.getElementById('container')!

  const conferences = SCHEDULE.map(c => new Conference(c))

  let dayContainer: HTMLDivElement = null as any
  let lastDay = -1

  conferences.forEach(c => {
    const dayOfMonth = c.getDayOfMonth()

    if (lastDay !== dayOfMonth) {
      lastDay = dayOfMonth

      dayContainer = document.createElement('div')
      dayContainer.classList.add('day')

      container.append(dayContainer)
    }

    c.appendTo(dayContainer)
  })
}

updatePage()
