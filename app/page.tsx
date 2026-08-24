function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-3 sm:mb-14">
      <span className="font-mono text-sm font-medium text-accent-600">{eyebrow}</span>
      <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">{title}</h2>
      <span className="h-px flex-1 bg-slate-200" aria-hidden />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md print:hidden">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-slate-900">
          Jaebok<span className="text-accent-600">.</span>
        </a>
        <nav className="flex items-center gap-1">
          <a
            href="https://ds-portfolio-white.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            포트폴리오
          </a>
          <a
            href="https://ds-resume-ver2.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="rounded-full px-3 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            이력서
          </a>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  const contactLinks = [
    { label: '포트폴리오', href: 'https://ds-portfolio-white.vercel.app/' },
    { label: '이력서', href: 'https://ds-resume-ver2.vercel.app/' },
  ]

  return (
    <section id="top" className="scroll-mt-20 px-5 pt-14 pb-10 sm:px-8 sm:pt-20">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-10 sm:flex-row sm:items-center sm:gap-14">
        <img
          src="/profile.jpeg"
          alt="이재복 프로필 사진"
          className="aspect-4/5 w-28 shrink-0 rounded-2xl object-cover ring-1 ring-slate-200 sm:w-36"
        />

        <div className="flex-1">
          <p className="mb-3 font-mono text-sm font-medium text-accent-600">Data Scientist</p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">경력기술서</h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
            문제 정의부터 모델 개발, 배포, 운영까지 — 건물 에너지 AI 서비스의 전 주기를 책임져온 데이터 사이언티스트 이재복입니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>총 경력 2년 11개월</span>
            <span>전 직장 이에이엔테크놀로지</span>
            <span>서울 관악구</span>
            <span>010-6426-9707</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:j_be_@naver.com"
              className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-accent-300 hover:text-accent-700"
            >
              j_be_@naver.com
            </a>
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-700 transition hover:border-accent-300 hover:text-accent-700"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TechSummary() {
  const items = [
    'Python 기반 ML/AI 서비스 개발 및 운영 경험',
    '시계열 예측, 이상 탐지, 강화학습, LLM Agent 프로젝트 수행',
    'BentoML, Airflow, MLflow 기반 MLOps 및 운영 자동화 구축 경험',
    '실시간 추론 API 및 모니터링 환경 구축 경험',
    '건물 에너지/HVAC 도메인 AI 서비스 프로덕션 운영 경험',
    'EC2, ECS, DynamoDB 등 AWS 기반 서비스 구축 및 운영 경험',
  ]

  return (
    <section className="scroll-mt-20 bg-slate-50 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="01" title="기술 요약" />
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
          <ul className="grid gap-3 sm:grid-cols-2">
            {items.map((item) => (
              <li key={item} className="flex gap-2.5 text-sm leading-relaxed text-slate-600">
                <span className="mt-0.5 shrink-0 text-accent-500">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function TechTags({ items }: { items: string }) {
  return (
    <div className="mt-5 flex flex-wrap gap-1.5">
      {items.split(',').map((item) => (
        <span key={item} className="rounded-md bg-slate-100 px-2.5 py-1 text-sm font-medium text-slate-800">
          {item.trim()}
        </span>
      ))}
    </div>
  )
}

function ProjectCard({
  num,
  title,
  period,
  role,
  contribution,
  overview,
  tasks,
  achievements,
  techStack,
}: {
  num: number
  title: string
  period: string
  role: string
  contribution: string
  overview: string
  tasks: { text: string; sub?: boolean }[]
  achievements: { text: string; highlight?: boolean }[]
  techStack: string
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h4 className="text-lg font-bold text-slate-900">
          <span className="mr-1 font-mono text-accent-600">{num}.</span>
          {title}
        </h4>
        <span className="font-mono text-xs text-slate-400">{period}</span>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-slate-500">{role}</span>
        <span className="rounded-md bg-accent-50 px-2 py-1 text-xs font-semibold text-accent-700">
          기여도 {contribution}
        </span>
      </div>

      <p className="mt-4 leading-relaxed text-slate-600">{overview}</p>

      <div className="mt-6 grid gap-8 sm:grid-cols-2">
        <div>
          <h5 className="mb-3 text-sm font-semibold tracking-wide text-slate-400 uppercase">주요 업무</h5>
          <ul className="space-y-1.5">
            {tasks.map((task, i) =>
              task.sub ? (
                <li
                  key={i}
                  className="ml-3.5 border-l border-slate-200 pl-3 text-sm leading-relaxed text-slate-500"
                >
                  {task.text}
                </li>
              ) : (
                <li key={i} className="flex gap-2 text-sm leading-relaxed text-slate-600">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" />
                  {task.text}
                </li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h5 className="mb-3 text-sm font-semibold tracking-wide text-slate-400 uppercase">주요 성과</h5>
          <ul className="space-y-1.5">
            {achievements.map((a, i) => (
              <li
                key={i}
                className={`flex gap-2 text-sm leading-relaxed ${
                  a.highlight ? 'font-semibold text-slate-900' : 'text-slate-600'
                }`}
              >
                <span className="mt-0.5 shrink-0 text-accent-500">✓</span>
                {a.text}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <TechTags items={techStack} />
    </div>
  )
}

function CareerHistory() {
  return (
    <section id="career" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="02" title="Career" />

        <ol className="relative space-y-14 border-l border-slate-200 pl-8">
          <li className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-white" />
            <p className="font-mono text-xs font-medium text-accent-600">2024.10 ~ 2026.06</p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">이에이엔테크놀로지</h3>
            <p className="text-sm font-medium text-slate-500">Data Scientist</p>

            <div className="mt-6 space-y-5">
              <ProjectCard
                num={1}
                title="건물 에너지 사용량 예측 서비스 (Energy Prediction Service)"
                period="2025.01 ~ 2025.07"
                role="예측 모델 설계 및 MLOps 구축"
                contribution="70%"
                overview="15분 단위 에너지 데이터를 기반으로 전력 수요 및 낭비 에너지를 예측하는 ML 서비스 개발"
                tasks={[
                  { text: '사용량 예측 모델과 낭비량 예측 모델 분리 설계' },
                  { text: '권장 사용량 지표 정의 및 산출 로직 설계' },
                  { text: 'XGBoost 기반 건물별 사용량 예측 모델 구축' },
                  { text: '시간·월 Sin/Cos 주기 인코딩 및 캘린더 기반 피처 엔지니어링 수행' },
                  { text: 'Optuna 기반 하이퍼파라미터 최적화 파이프라인 구축' },
                  { text: 'MLflow 기반 건물별 최적 파라미터 저장·재사용 구조 설계' },
                  { text: 'BentoML 기반 실시간 추론 API 개발 및 배포' },
                ]}
                achievements={[
                  { text: '에너지 사용량 예측 모델 R² 0.93 달성', highlight: true },
                  { text: '낭비량 예측 모델 MAPE 8.9% 달성', highlight: true },
                  { text: '11개 건물 프로덕션 운영 적용' },
                ]}
                techStack="XGBoost, BentoML, MLflow, Grafana"
              />

              <ProjectCard
                num={2}
                title="건물 재실 예측 서비스 (Occupancy Assumption Service)"
                period="2024.11 ~ 2025.04"
                role="ML 모델 설계 및 API 개발"
                contribution="70%"
                overview="건물 에너지 데이터를 기반으로 재실 여부 및 재실 밀도를 추론하여 HVAC·조명 자동제어에 활용한 ML 서비스 개발"
                tasks={[
                  { text: '전열(HMM)·전등(KMeans) 기반 이원화 재실 추론 알고리즘 설계' },
                  { text: 'Gaussian Smoothing 기반 재실 패턴 안정화 로직 구현' },
                  { text: '이상치 제거, 공휴일 제외, 대기전력 감지를 포함한 전처리 파이프라인 구축' },
                  { text: '30일 기준선 기반 재실 판정 로직 설계' },
                  { text: 'BentoML 기반 실시간 추론 API 개발' },
                  { text: 'Backfill 검증 및 운영 안정화 체계 구축' },
                  { text: 'Grafana·Prometheus 기반 실시간 모니터링 환경 구축' },
                  { text: '재실 밀집도 지표 설계 및 시각화' },
                ]}
                achievements={[
                  { text: '9개 건물 프로덕션 배포 및 운영' },
                  { text: 'HVAC·조명 자동제어 연계를 통한 비재실 구간 에너지 낭비 감소', highlight: true },
                  { text: '실시간 추론 API 안정화 및 False Positive 최소화' },
                ]}
                techStack="HMM, KMeans, BentoML, Grafana"
              />

              <ProjectCard
                num={3}
                title="건물 에너지·IAQ 이상 탐지 서비스 (Anomaly Detection Service)"
                period="2025.02 ~ 2025.03"
                role="이상 탐지 알고리즘 및 API 개발"
                contribution="70%"
                overview="에너지 및 IAQ 센서 데이터를 실시간 분석하여 장비 이상·통신 오류·비정상 패턴을 탐지하는 시스템 개발"
                tasks={[
                  { text: 'Hampel·IQR 기반 에너지 이상 탐지 앙상블 설계' },
                  { text: 'Sequence Detector 기반 센서 정지 탐지 로직 구현' },
                  { text: 'Negative Diff 기반 데이터 오류 탐지 로직 구현' },
                  { text: '센서 유형 및 패턴 기반 동적 임계치 자동 조정 로직 설계' },
                  { text: '7단계 전처리 파이프라인 구축' },
                  { text: 'BentoML 기반 추론 API 개발 및 Airflow 스케줄링 연동' },
                ]}
                achievements={[
                  { text: 'Hampel·IQR 동시 탐지 조건 적용으로 오탐지 30~40% 감소', highlight: true },
                  { text: '8,896개 이상 센서 실시간 병렬 처리 환경 구축' },
                  { text: '장비 고장 조기 탐지 체계 운영' },
                ]}
                techStack="Hampel filter, Pandas, SciPy, BentoML, Airflow"
              />

              <ProjectCard
                num={4}
                title="DQN 기반 HVAC 자동 제어 시스템"
                period="2025.12 ~ 2026.06"
                role="강화학습 시스템 설계 및 운영 자동화"
                contribution="100%"
                overview="심층 강화학습(DQN) 기반 HVAC 설정온도 자동 제어 시스템 개발"
                tasks={[
                  { text: 'HVAC 제어용 강화학습 환경 설계' },
                  { text: '상태(State): 실내온도, 설정온도, 외기온도', sub: true },
                  { text: '행동(Action): ±2°C 범위 5단계 제어', sub: true },
                  { text: '보상(Reward): 쾌적도 기반 가우시안 함수 및 설정 변경 패널티 적용', sub: true },
                  { text: 'Q Network / Target Network 기반 DQN 모델 구현' },
                  { text: 'Replay Buffer 기반 학습 구조 설계' },
                  { text: '시뮬레이션 사전 학습 후 15분 주기 Online Learning 파이프라인 구축' },
                  { text: '외기온도 기반 냉난방 모드 자동 전환 로직 설계' },
                  { text: '쾌적 범위 이탈 시 강제 Override 로직 구현' },
                  { text: 'Apache Airflow 기반 학습·추론 자동화 구축' },
                  { text: 'PostgreSQL 기반 학습 데이터 운영 구조 설계' },
                ]}
                achievements={[
                  { text: '실외기 전력 사용량 14.9% 절감 (57.8 → 49.1 kWh/일)', highlight: true },
                  { text: '유사 외기온도 기준 비교군 검증 수행' },
                  { text: 'HVAC 실내기 15대 자동 제어 운영 적용' },
                ]}
                techStack="PyTorch, RL(DQN), BentoML, MLflow, Airflow"
              />

              <ProjectCard
                num={5}
                title="LLM 기반 건물 에너지 분석 챗봇 (Solution Summary Agent)"
                period="2025.07 ~ 2025.10"
                role="SQL Agent 아키텍처 및 API 개발"
                contribution="40%"
                overview="비개발자가 자연어만으로 건물 에너지 데이터를 조회·분석할 수 있는 멀티턴 대화형 에이전트 개발"
                tasks={[
                  { text: 'LangGraph 기반 SQL Agent 아키텍처 설계' },
                  { text: '이전 질의 맥락 유지 및 축약 발화 처리 로직 구현' },
                  { text: 'SQL Injection 방지 및 스키마 격리 기반 보안 구조 설계' },
                  { text: 'SQL Toolkit, 예측 API, 웹검색 기반 Tool Calling 구조 구현' },
                  { text: 'SQL + API + 웹검색 하이브리드 질의 처리 파이프라인 설계' },
                  { text: 'FastAPI 기반 세션 관리 및 REST API 개발' },
                  { text: 'Prompt Engineering 기반 SQL 정확도 및 안정성 개선' },
                ]}
                achievements={[
                  { text: 'SQL 없이 복잡한 집계·비교 분석 가능한 환경 구축', highlight: true },
                  { text: '비개발자 대상 데이터 접근성 향상' },
                  { text: '운영 중 오류 사례 개선을 통한 안정성 강화' },
                ]}
                techStack="LangGraph, LangChain, LangSmith, GPT-4o"
              />
            </div>
          </li>

          <li className="relative">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-accent-500 ring-4 ring-white" />
            <p className="font-mono text-xs font-medium text-accent-600">2023.05 ~ 2024.06</p>
            <h3 className="mt-1 text-lg font-bold text-slate-900">라임솔루션</h3>
            <p className="text-sm font-medium text-slate-500">Data Analyst</p>

            <div className="mt-6 space-y-5">
              <ProjectCard
                num={6}
                title="저수지 수위 예측 서비스 (Reservoir Level Prediction Service)"
                period="2023.07 ~ 2024.01"
                role="데이터 분석 및 예측 API 개발"
                contribution="40%"
                overview="강우량 및 저수지 수위 데이터를 기반으로 12시간 이후 수위를 예측하여 주민 안전 확보 및 수문 조작 의사결정을 지원하는 ML 서비스 개발"
                tasks={[
                  { text: '강우량·수위 데이터 기반 EDA 및 상관관계 분석 수행' },
                  { text: '강우-수위 간 1~2시간 Lag 패턴 도출' },
                  { text: 'Lag 기반 시계열 피처 엔지니어링 수행' },
                  { text: 'Hampel Filter 및 선형 보간 기반 전처리 파이프라인 구축' },
                  { text: 'AutoML + DLinear 기반 듀얼 모델 예측 구조 설계' },
                  { text: 'FastAPI 기반 실시간 예측 API 개발' },
                ]}
                achievements={[
                  { text: '12시간 선행 수위 예측 달성', highlight: true },
                  { text: '주민 대피 가능 시간 확보에 기여' },
                  { text: '수문 조작 의사결정 자동화 기반 마련' },
                ]}
                techStack="Python, AutoML, DLinear, FastAPI"
              />
            </div>
          </li>
        </ol>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-5 py-10 sm:px-8 print:hidden">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="text-sm text-slate-500">이재복 · j_be_@naver.com · 010-6426-9707</p>
        <a href="#top" className="text-sm font-medium text-slate-500 hover:text-accent-600">
          맨 위로 ↑
        </a>
      </div>
    </footer>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <TechSummary />
        <CareerHistory />
      </main>
      <Footer />
    </div>
  )
}
