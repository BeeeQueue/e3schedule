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

type LinkType = 'youtube' | 'twitch' | 'mixer' | 'general'
interface ISchedule {
  readonly company: ICompany
  readonly time: Date
  readonly links: ReadonlyArray<{
    type: LinkType
    url: string
  }>
}

const createLink = (url: string) => {
  let type: LinkType = 'general'

  if (url.includes('youtube')) {
    type = 'youtube'
  }
  if (url.includes('twitch')) {
    type = 'twitch'
  }
  if (url.includes('mixer')) {
    type = 'mixer'
  }

  return {
    type,
    url,
  }
}

const SCHEDULE: ISchedule[] = [
  {
    company: EA,
    time: new Date('June 8 2019 16:30 UTC'),
    links: [
      createLink('https://www.twitch.tv/ea'),
      createLink('https://www.youtube.com/channel/UCIHBybdoneVVpaQK7xMz1ww'),
    ],
  },
  {
    company: MICROSOFT,
    time: new Date('June 9 2019 4:00 pm EDT'),
    links: [createLink('https://mixer.com/xbox')],
  },
  {
    company: BETHESDA,
    time: new Date('June 9 2019 8:30 pm EDT'),
    links: [
      createLink('https://www.twitch.tv/Bethesda'),
      createLink('https://www.youtube.com/Bethesda'),
      createLink('https://mixer.com/Bethesda'),
    ],
  },
  {
    company: DEVOLVER_DIGITAL,
    time: new Date('June 9 2019 11:00 pm EDT'),
    links: [
      createLink('https://www.twitch.tv/devolverdigital'),
      createLink('https://www.youtube.com/user/pcgamer'),
      createLink('https://mixer.com/pcgamer'),
    ],
  },
  {
    company: UPLOADVR,
    time: new Date('June 10 2019 16:00 UTC'),
    links: [
      createLink('https://www.youtube.com/channel/UCqDMvCa1tGak6AmijajiKOw'),
    ],
  },
  {
    company: PC_GAMING,
    time: new Date('June 10 2019 17:00 UTC'),
    links: [createLink('https://www.twitch.tv/pcgamer')],
  },
  {
    company: LIMITED_RUN,
    time: new Date('June 10 2019 19:00 UTC'),
    links: [createLink('https://www.twitch.tv/limitedrungames')],
  },
  {
    company: UBISOFT,
    time: new Date('June 10 2019 20:00 UTC'),
    links: [
      createLink('https://www.twitch.tv/ubisoft'),
      createLink('https://www.youtube.com/user/ubisoft'),
      createLink('https://mixer.com/pcgamer'),
    ],
  },
  {
    company: KINDA_FUNNY_SHOWCASE,
    time: new Date('June 10 2019 23:00 UTC'),
    links: [createLink('https://www.youtube.com/kindafunnygames')],
  },
  {
    company: SQUARE_ENIX,
    time: new Date('June 11 2019 01:00 UTC'),
    links: [createLink('https://e3.square-enix-games.com')],
  },
  {
    company: NINTENDO_DIRECT,
    time: new Date('June 11 2019 16:00 UTC'),
    links: [
      createLink('https://e3.nintendo.com/'),
      createLink('https://www.youtube.com/channel/UCGIY_O-8vW4rfX98KlMkvRg'),
    ],
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
        <div class="lower">
          ${this.mapHTML(
            schedule.links,
            link => `
              <a class="link ${link.type}" href="${link.url}" target="_blank" rel="noref">
                <img src="img/${link.type}.svg" alt="${link.type}"/>
              </a>
            `,
          )}
          <div class="time">${this.getTime()}</div>
        </div>
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

  private mapHTML(
    links: ISchedule['links'],
    mapFn: (link: ISchedule['links'][number]) => string,
  ): string {
    return links
      .map(link => {
        const result = mapFn(link)
        return result.trim()
      })
      .join('\n')
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
      dayContainer.insertAdjacentHTML(
        'beforebegin',
        `<h1 class="title">${c.getDayString()}</h1>`,
      )
    }

    c.appendTo(dayContainer)
  })
}

updatePage()

const notifications: number[] = []

const checkbox = document.getElementById(
  'notification-checkbox',
) as HTMLInputElement

checkbox.onchange = e => {
  const { checked } = e.currentTarget as HTMLInputElement

  if (checked) {
    registerNotifications()
  } else {
    unregisterNotifications()
  }
}

const registerNotifications = () => {
  if (Notification.permission !== 'granted') {
    Notification.requestPermission().then(result => {
      if (result === 'granted') {
        return registerNotifications()
      }

      checkbox.checked = false
    })
  }

  SCHEDULE.forEach(conference => {
    const time = conference.time.getTime()
    const now = Date.now()

    if (time <= now) return

    const id = setTimeout(() => {
      const notification = new Notification(`${conference.company.name}'s E3 has started!`, {
        vibrate: [500, 500, 500, 500, 500],
      })

      notification.onclick = () => {
        location.href = conference.links[0].url
      }
    }, time - now)

    notifications.push(id)
  })
}

const unregisterNotifications = () => {
  notifications.forEach(id => clearTimeout(id))
  notifications.splice(0, notifications.length)
}
