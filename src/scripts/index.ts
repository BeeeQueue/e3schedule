interface ICompany {
  name: string
  logo: string
}

const EA = {
  name: 'EA Play',
  logo: 'ea.svg',
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

// @ts-ignore
const SCHEDULE: ISchedule[] = [
  {
    company: EA,
    time: new Date("June 7 2019 12:00 pm PDT"),
  },
  {
    company: MICROSOFT,
    time: new Date("June 9 2019 4:00 pm EDT"),
  },
  {
    company: BETHESDA,
    time: new Date("June 9 2019 8:30 pm EDT"),
  },
  {
    company: DEVOLVER_DIGITAL,
    time: new Date("June 9 2019 11:00 pm EDT"),
  },
  {
    company: UPLOADVR,
    time: new Date("June 10 2019 16:00 UTC"),
  },
  {
    company: PC_GAMING,
    time: new Date("June 10 2019 17:00 UTC"),
  },
  {
    company: LIMITED_RUN,
    time: new Date("June 10 2019 19:00 UTC"),
  },
  {
    company: UBISOFT,
    time: new Date("June 10 2019 20:00 UTC"),
  },
  {
    company: KINDA_FUNNY_SHOWCASE,
    time: new Date("June 10 2019 23:00 UTC"),
  },
  {
    company: SQUARE_ENIX,
    time: new Date("June 11 2019 01:00 UTC"),
  },
  {
    company: NINTENDO_DIRECT,
    time: new Date("June 11 2019 16:00 UTC"),
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

  public getDayString() {
    return Intl.DateTimeFormat(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
    }).format(this.schedule.time)
  }

  public appendTo(element: HTMLElement) {
    element.insertAdjacentHTML('beforeend', this.el)
  }
}

const updatePage = () => {
  const container = document.getElementById('container')!

  const conferences = SCHEDULE.map(c => new Conference(c))

  let dayContainer: HTMLElement = null as any
  let lastDay = -1

  conferences.forEach(c => {
    const dayOfMonth = c.getDayOfMonth()

    if (lastDay !== dayOfMonth) {
      lastDay = dayOfMonth

      dayContainer = document.createElement('section')
      dayContainer.classList.add('day')

      container.append(dayContainer)
      dayContainer.insertAdjacentHTML('beforebegin', `<h1 class="title">${c.getDayString()}</h1>`)
    }

    c.appendTo(dayContainer)
  })
}

updatePage()
