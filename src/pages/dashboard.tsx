import { Header } from "../components/Header";
import { Flex, SimpleGrid, Box, Text, theme } from '@chakra-ui/react'
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";


const Chart = dynamic(() => import('react-apexcharts'), { ssr: false })

const optionsLine = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false
    },
    foreColor: theme.colors.gray[500]
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false
  },
  tooltip: {
    theme: 'dark',
    style: {
      fontSize: '12px',
      fontFamily: "Roboto",
    },
  },
  xaxis: {
    labels: {
      format: 'MM yyyy',
    },

    axisBorder: {
      color: theme.colors.gray[600]
    },
    axisTicks: {
      color: theme.colors.gray[600]
    },
    categories: [
      '2021-03-18',
      '2021-04-18',
      '2021-05-18',
      '2021-06-18',
      '2021-07-18',
      '2021-08-18',
      '2021-09-18',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    }
  }
}
const seriesLine = [
  {
    name: 'Minha Carteira',
    data: [1, 0.923, 1.0589, 1.0981, 1.110, 1.265, 1.459]
  },

  {
    name: 'CDI',
    data: [1, 1.020, 1.021, 1.022, 1.023, 1.028, 1.030]
  }
]

const seriesLine2 = [
  {
    name: 'Minha Carteira',
    data: [0, 2521, 2854, 2914, 3398, 3947, 4291]
  },
]


const seriesPie = [44, 55, 13, 43]
const optionsPie = {
  chart: {
    width: 380,
  },
  labels: ['ETF', 'Multimercado', 'Renda Fixa', 'Ações'],
  legend: {
    show: true,
    fontSize: '14px',
    fontFamily: 'Roboto',
    fontWeight: 400,
    labels: {
      colors: 'white',
    },
    itemMargin: {
      vertical: 25
    },
  }

}

export default function Dashboard() {
  return (
    <Flex direction='column' h='100vh'>
      <Header />

      <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6' >
        <Sidebar />
        <SimpleGrid flex='1' gap='4' minChildWidth='550px' align='flex-start' >
          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Rentabilidade</Text>
            <Chart options={optionsLine} series={seriesLine} type='area' height={400} />
          </Box>

          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Composição</Text>
            <Chart options={optionsPie} series={seriesPie} type='pie' height={400} />
          </Box>

          <Box
            p='8'
            bg='gray.800'
            borderRadius={8}
            pb='4'
          >
            <Text fontSize='lg' mb='4'>Evolução do Patrimônio</Text>
            <Chart options={optionsLine} series={seriesLine2} type='area' height={400} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  )
}