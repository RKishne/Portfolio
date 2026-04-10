import styled from "styled-components";
import { motion } from "framer-motion";
import { Section } from "./GlobalStyle";

export const ServicesSection = styled(Section)`
  position: relative;
  background: rgba(15, 23, 42, 0.3);
`;

export const ServicesHeader = styled.div`
  text-align: center;
  margin-bottom: var(--spacing-16);
`;

export const ServicesTitle = styled(motion.h2)`
  font-size: var(--text-4xl);
  color: var(--dark-100);
  margin-bottom: var(--spacing-4);
`;

export const ServicesSubtitle = styled(motion.p)`
  color: var(--dark-400);
  font-size: var(--text-lg);
`;

export const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: var(--spacing-8);
  max-width: 1216px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: var(--spacing-6);
  }
`;

export const ServiceCard = styled(motion.div)`
  background: rgba(30, 41, 59, 0.5);
  padding: var(--spacing-8);
  border-radius: var(--radius-xl);
`;

export const ServiceIcon = styled.div`
  font-size: 1.75rem;
  width: 56px;
  height: 56px;
  background: rgba(100, 255, 218, 0.1);
  border: 1px solid rgba(100, 255, 218, 0.2);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-5);
  font-size: 1.75rem;
  transition: var(--transition-normal);

  ${ServiceCard}:hover & {
    background: rgba(100, 255, 218, 0.15);
    border-color: rgba(100, 255, 218, 0.4);
    transform: scale(1.05);
  }
`;

export const ServiceTitleText = styled.h3`
  font-size: var(--text-2xl);
  color: var(--dark-50);
  margin-bottom: var(--spacing-3);
  font-weight: var(--font-semibold);
`;

export const ServiceDescription = styled.p`
color: var(--dark-400);
  font-size: var(--text-base);
  line-height: 1.7;
  margin-bottom: var(--spacing-4);`;

export const ServiceFeatures = styled.ul`
    list-style: none;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2);
`;

export const ServiceFeature = styled.li`
    color: var(--dark-300);
  font-size: var(--text-sm);
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-2);

  &::before {
    content: "✓";
    color: var(--accent-primary);
    font-weight: var(--font-bold);
    margin-top: 2px;
  }
`;

