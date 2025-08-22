// mockData.ts
export interface Member {
  id: number
  name: string
  score: number
  todayHours: number
  avatar: string
  grade: string
}

export interface Group {
  id: number
  grade: string
  members: Member[]
}

export const groups: Group[] = [
  {
    id: 1,
    grade: '大一成员',
    members: [
      {
        id: 1,
        name: '李明',
        score: 320,
        todayHours: 2.5,
        avatar: 'https://i.pravatar.cc/100?img=1',
        grade: '大一'
      },
      {
        id: 2,
        name: '张伟',
        score: 285,
        todayHours: 1.5,
        avatar: 'https://i.pravatar.cc/100?img=2',
        grade: '大一'
      },
      {
        id: 3,
        name: '王芳',
        score: 410,
        todayHours: 4,
        avatar: 'https://i.pravatar.cc/100?img=3',
        grade: '大一'
      },
      {
        id: 4,
        name: '刘强',
        score: 350,
        todayHours: 3,
        avatar: 'https://i.pravatar.cc/100?img=4',
        grade: '大一'
      },
      {
        id: 5,
        name: '陈静',
        score: 290,
        todayHours: 0,
        avatar: 'https://i.pravatar.cc/100?img=5',
        grade: '大一'
      }
    ]
  },
  {
    id:2,
    grade: '大二成员',
    members: [
      {
        id: 6,
        name: '赵阳',
        score: 520,
        todayHours: 5,
        avatar: 'https://i.pravatar.cc/100?img=6',
        grade: '大二'
      },
      {
        id: 7,
        name: '孙婷',
        score: 480,
        todayHours: 4.5,
        avatar: 'https://i.pravatar.cc/100?img=7',
        grade: '大二'
      },
      {
        id: 8,
        name: '周浩',
        score: 450,
        todayHours: 3.5,
        avatar: 'https://i.pravatar.cc/100?img=8',
        grade: '大二'
      },
      {
        id: 9,
        name: '吴琳',
        score: 420,
        todayHours: 2,
        avatar: 'https://i.pravatar.cc/100?img=9',
        grade: '大二'
      }
    ]
  },
  {
    id:3,
    grade: '大三成员',
    members: [
      {
        id: 10,
        name: '郑凯',
        score: 680,
        todayHours: 6,
        avatar: 'https://i.pravatar.cc/100?img=10',
        grade: '大三'
      },
      {
        id: 11,
        name: '钱莉',
        score: 650,
        todayHours: 5.5,
        avatar: 'https://i.pravatar.cc/100?img=11',
        grade: '大三'
      },
      {
        id: 12,
        name: '孙杰',
        score: 620,
        todayHours: 4,
        avatar: 'https://i.pravatar.cc/100?img=12',
        grade: '大三'
      }
    ]
  },
  {
    id:4,
    grade: '大四成员',
    members: [
      {
        id: 13,
        name: '李强',
        score: 780,
        todayHours: 7,
        avatar: 'https://i.pravatar.cc/100?img=13',
        grade: '大四'
      },
      {
        id: 14,
        name: '张敏',
        score: 750,
        todayHours: 6.5,
        avatar: 'https://i.pravatar.cc/100?img=14',
        grade: '大四'
      }
    ]
  }
]
