import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface ClockRecord {
  id?: string
  date: number
  startTime: Date
  endTime: Date
  duration?: number
  price?: number
}

interface ClockInState {
  duration: number
  records: ClockRecord[]
  currentTime: Date | null
  status: 'idle' | 'started' | 'saving' | 'saved' | 'error'
  timer: NodeJS.Timeout | null
  seconds: number

  runTime: () => void
  startClockIn: () => void
  endClockIn: () => Promise<void>
  loadRecords: () => Promise<void>
}

const api = {
  saveClockInRecord: async (record: ClockRecord) => {
    console.log(record)
    return Promise.resolve()
  },
  getClockInRecord: async () => {
    return Promise.resolve([] as ClockRecord[])
  }
}

export const useClockInStore = create<ClockInState>()(
  devtools((set, get) => ({
    records: [],
    currentTime: null,
    status: 'idle',
    duration: 0,
    timer: null,
    seconds: 0,

    runTime: () => {
      set((state) => ({
        seconds: state.seconds + 1
      }))
    },

    startClockIn: () => {
      const timer = setInterval(() => {
        get().runTime()
      }, 1000)

      set({
        currentTime: new Date(),
        status: 'started',
        timer: timer,
        seconds: 0
      })
    },

    endClockIn: async () => {
      const { currentTime , timer } = get()
      if(timer)clearInterval(timer)
      if (!currentTime) return

      const end = new Date()
      const duration = Math.floor((end.getTime() - currentTime.getTime()) / 1000)
      const price = Number(((duration / 3600) * 20).toFixed(2))

      const record: ClockRecord = {
        date: end.getDate(),
        startTime: currentTime,
        endTime: end,
        duration,
        price
      }

      set({ status: 'saving' })

      try {
        await api.saveClockInRecord(record)
        set((state) => ({
          records: [...state.records, record],
          timer:null,
          seconds:0,
          currentTime: null,
          status: 'idle'
        }))
      } catch (error) {
        console.log('打卡失败', error)
        set({ status: 'error' })
      }
    },

    loadRecords: async () => {
      set({ status: 'saving' })
      try {
        const res = await api.getClockInRecord()
        set({ records: res, status: 'saved' })
      } catch (error) {
        console.log('加载失败', error)
        set({ status: 'error' })
      }
    }
  }))
)
