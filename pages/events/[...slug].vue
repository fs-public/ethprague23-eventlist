<script setup lang="ts">
const { slug } = useRoute().params
const slugs = Array.isArray(slug) ? slug : [slug]

const activities: DActivity[] = [
  {
    status: 'past',
    name: 'Degens all always right!',
    time: '13:30 - 14:00',
    speaker: 'Coinmandeer',
  },
  {
    status: 'past',
    name: 'I\'m right and you know it',
    time: '14:30 - 15:00',
    speaker: 'Vitalik',
  },
  {
    status: 'past',
    name: 'Discord is a Crime',
    time: '15:30 - 16:00',
    speaker: 'Tree',
  },
  {
    status: 'live',
    name: 'Degens all always right!',
    time: '17:30 - 18:00',
    speaker: 'Coinmandeer',
  },
  {
    status: 'upcoming',
    name: 'I\'m right and you know it',
    time: '18:30 - 19:00',
    speaker: 'Vitalik',
  },
  {
    status: 'upcoming',
    name: 'Discord is a Crime',
    time: '20:30 - 21:00',
    speaker: 'Tree',
  },
  {
    status: 'upcoming',
    name: 'Party',
    time: '21:30 - 00:00',
    speaker: 'ETH Prague',
  },
]

activities.forEach(activity => activity.url = '#')

const mockStages: DStage[] = [
  { name: 'Stage 1', url: getEventUrl('stage1', slugs), activities },
  { name: 'Stage 2', url: getEventUrl('stage2', slugs), activities },
  { name: 'Hackathon', url: getEventUrl('hackathon', slugs), activities },
  { name: 'Hackathon #2', url: getEventUrl('hackathon2', slugs), activities },
]

const tabOptions = ['overview', 'schedule', 'contributors', 'hackathon', 'tickets', 'reviews']

const pillSelect = ref(0)

const mockSocials = {
  web: 'ethprague.com',
  twitter: '@ethprague',
  telegram: '@ETHPRG',
  lens: 'ethprague.lens',
  github: 'github.com/ethprague',
}

const socialIcons = {
  web: 'i-ph-globe',
  twitter: 'i-cib-twitter text-[#1d9bf0]',
  telegram: 'i-cib-telegram text-[#31a9df]',
  lens: 'i-ph-tree-palm text-[#004e1d] ',
  github: 'i-cib-github',
}
</script>

<template>
  <div relative flex flex-col items-center gap-16px w-full p-32px class="bg-shiny-gradient">
    <img src="/assets/ethprague.png" alt="Event Logo" pb-8px>
    <div heading-lg>
      {{ slugs.join('/') }}
    </div>
    <div flex items-center heading-xs>
      {{ "June 9 – 11. 2023" }}
      <UnoIcon i-ph-users-fill ml-16px mr-8px text-gray-600 />
      {{ "750" }}
    </div>
    <div heading-xs>
      {{ "Paralelní Polis, La Fabrika, Vnitroblock – Praha, CZ" }}
    </div>
    <div heading-xs flex gap-12px>
      <div
        v-for="(tag, i) in ['Hackathon', 'Conference']" :key="i"
        rounded-8px border-1 border-black-lighter px-12px py-4px
      >
        {{ tag }}
      </div>
    </div>
    <!-- Absolute side info and buttons -->
    <div absolute left-32px top-32px flex justify-between class="w-[calc(100%-64px)]" heading-xs text-gray-600>
      <div>Event is in <span font-700>{{ "8" }} event lists</span></div>
      <div flex items-center gap-12px role="button">
        <UnoIcon i-ph-share-network-fill />Share
      </div>
    </div>
  </div>
  <div w-full border-b-1 border-b-bggray-200 mt-24px mb-48px>
    <UITabs v-model="pillSelect" :options="tabOptions" />
  </div>
  <div page-container gap-48px>
    <div>
      <div heading-sm text-gray-600 mb-24px>
        {{ 130 }} CONTRIBUTORS
      </div>
      <div flex gap-16px>
        <img
          v-for="(_, i) in [...Array(100)].slice(0, 10)" :key="i" src="/assets/person.png" alt="Person" w-80px h-80px rounded-full
          hidden xl:block
          :class="{ 'block!': i < 3, 'md:block': i < 5, 'lg:block': i < 7 }"
        >
        <div w-80px h-80px rounded-full border-2 border-black flex justify-center items-center heading-sm>
          +
          <span md:hidden>{{ 80 + 7 }}</span>
          <span hidden md:block lg:hidden>{{ 80 + 5 }}</span>
          <span hidden lg:block xl:hidden>{{ 80 + 3 }}</span>
          <span hidden xl:block>{{ 80 }}</span>
        </div>
      </div>
    </div>
    <div>
      <div heading-sm text-gray-600 mb-24px>
        {{ 3 }} SUB-EVENTS
      </div>
      <div w-full grid grid-cols-1 gap-16px md:grid-cols-2 lg:grid-cols-3>
        <div v-for="i in 3" :key="i" flex items-center gap-16px>
          <img src="/assets/subevent.png" alt="Person" w-80px h-80px rounded-16px>
          <div flex flex-col gap-4px heading-xs>
            <div font-700>
              {{ "Boat Chill-zone" }}
            </div>
            <div>{{ "June 2023 – 17:00" }}</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div heading-sm text-gray-600 mb-24px>
        SOCIALS
      </div>
      <div w-full grid grid-cols-1 gap-32px md:grid-cols-2 lg:grid-cols-3>
        <div
          v-for="(socialKey, i) in (Object.keys(mockSocials) as (keyof typeof mockSocials)[])" :key="i"
          flex flex-col gap-8px rounded-16px bg-bggray-50 px-32px py-24px
        >
          <div flex items-center gap-8px>
            <UnoIcon :class="socialIcons[socialKey]" w-24px h-24px />
            <div heading-xs text-gray-600 capitalize>
              {{ socialKey }}
            </div>
          </div>
          <div heading-sm>
            {{ mockSocials[socialKey] }}
          </div>
        </div>
      </div>
    </div>
    <div>
      <div heading-sm text-gray-600 mb-16px>
        DESCRIPTION
      </div>
      <div heading-sm mb-24px>
        ETHPrague isn’t looking for the next get rich quickly scheme or groundbreaking DeFi apps, instead it’s an event
        focusing on the future potential of Ethereum and concepts or applications which don’t yet exist. We want to tackle
        challenges which will or might arise in the next decade and we believe Ethereum will play a major role in solving these.
        The future is in your hands, anon! You decide whether we end up living in a dark authoritarian dystopia or a bright
        solarpunk utopia.
      </div>
      <div w-full grid grid-cols-1 gap-6px md:grid-cols-2 heading-sm>
        <div><span text-gray-600>Chains: </span>{{ "Ethereum" }}</div>
        <div><span text-gray-600>Entry: </span>{{ "Free for hackers, $120 for others" }}</div>
        <div><span text-gray-600>Tags: </span>{{ "#solarpunk #pbw2023" }}</div>
        <div><span text-gray-600>ID: </span>{{ "English" }}</div>
        <div><span text-gray-600>Language: </span>{{ "English" }}</div>
        <div><span text-gray-600>Param#1: </span>{{ "Value" }}</div>
        <div><span text-gray-600>Organizator: </span>{{ "DuckTape / Paralelni Polis" }}</div>
        <div display-none md:block />
        <div><span text-gray-600>Point of contact: </span>{{ "Josef J, Vojta" }}</div>
      </div>
    </div>
    <div>
      <div heading-sm text-gray-600 mb-24px>
        {{ 3 }} VENUES
      </div>
      <div w-full grid grid-cols-1 gap-16px md:grid-cols-2 lg:grid-cols-3>
        <div v-for="i in 3" :key="i" flex items-center gap-16px>
          <img src="/assets/lafabrika.png" alt="Venue" w-80px h-80px rounded-16px>
          <div flex flex-col gap-4px heading-xs>
            <div font-700>
              {{ "La Fabrika" }}
            </div>
            <div>{{ 450 }} people</div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div heading-sm text-gray-600 mb-24px>
        POAP
      </div>
      <div flex items-center gap-32px>
        <img src="/assets/ethprague-shiny.png" alt="Venue" w-200px h-200px rounded-full>
        <div heading-sm>
          <div text-gray-600>
            Link:
          </div>
          <div>{{ "poap.delivery/ethprague" }}</div>
        </div>
      </div>
    </div>
    <div heading-lg>
      12. 5. - Tuesday
    </div>
    <div flex flex-wrap gap-48px pb-30px>
      <TStageDetail v-for="(stage, i) in mockStages" :key="i" :stage="stage" />
    </div>
    <div heading-lg>
      13. 5. - Wednesday
    </div>
    <div flex flex-wrap gap-48px>
      <TStageDetail v-for="(stage, i) in mockStages.slice(0, 2)" :key="i" :stage="stage" />
    </div>
  </div>
</template>
