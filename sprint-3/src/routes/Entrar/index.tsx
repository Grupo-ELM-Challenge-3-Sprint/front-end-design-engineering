// src/pages/Entrar/index.jsx
import { useState, useCallback, useMemo } from "react";
import { useFormValidation, validators, useInputMasks, useFormState } from "../../hooks";
import type { ValidationRules } from "../../hooks";
import { LoginForm, CadastroForm, EsqueciSenhaForm } from "../../components/forms";

import '../../globals.css';

export default function Entrar() {
    // Estados principais
    const [formAtual, setFormAtual] = useState('login');
    const [etapaCadastro, setEtapaCadastro] = useState(1);

    // Hooks customizados
    const { formData, statusMessage, showPasswords, updateField, resetForm, setStatus, clearStatus, togglePasswordVisibility } = useFormState();
    const { applyMask, getMaskType } = useInputMasks();

    // Regras de validação por formulário
    const validationRules = useMemo((): ValidationRules => ({
        // Login
        loginCpf: { required: true, custom: validators.cpf },
        loginSenha: { required: true },
        
        // Cadastro
        cadastroNomeCompleto: { required: true, custom: validators.name },
        cadastroCpf: { required: true, custom: validators.cpf },
        dataNascimento: { required: true, custom: validators.date },
        cadastroEmail: { required: true, custom: validators.email },
        cadastroSenha: { required: true, custom: validators.password },
        confirmarSenha: { 
            required: true, 
            custom: (value: string) => value !== formData.cadastroSenha ? 'As senhas não coincidem.' : null 
        },
        
        // Esqueci senha
        esqueciCpf: { required: true, custom: validators.cpf },
        esqueciEmail: { required: true, custom: validators.email }
    }), [formData.cadastroSenha]);

    // Hook de validação
    const { errors, validateForm, clearError, clearAllErrors } = useFormValidation(validationRules);

    // Handlers otimizados
    const handleInputChange = useCallback((field: string, value: string) => {
        const maskType = getMaskType(field);
        const maskedValue = maskType ? applyMask(value, maskType) : value;
        
        updateField(field as keyof typeof formData, maskedValue);
        
        if (errors[field]) {
            clearError(field);
        }
    }, [getMaskType, applyMask, updateField, errors, clearError]);

    const handleFormChange = useCallback((newForm: string) => {
        setFormAtual(newForm);
        clearAllErrors();
        clearStatus();
        if (newForm === 'cadastro') {
            setEtapaCadastro(1);
        }
    }, [clearAllErrors, clearStatus]);

    const handleNextStep = useCallback(() => {
        const stepFields = {
            1: ['cadastroNomeCompleto', 'cadastroCpf', 'dataNascimento'],
            2: ['cadastroEmail'],
            3: ['cadastroSenha', 'confirmarSenha']
        };
        
        const currentStepFields = stepFields[etapaCadastro as keyof typeof stepFields] || [];
        console.log('Etapa atual:', etapaCadastro);
        console.log('Campos da etapa:', currentStepFields);
        
        const stepData = currentStepFields.reduce((acc, field) => {
            acc[field] = formData[field as keyof typeof formData];
            return acc;
        }, {} as {[key: string]: string});
        
        console.log('Dados da etapa:', stepData);
        console.log('FormData completo:', formData);
        
        if (validateForm(stepData)) {
            console.log('Validação passou, avançando etapa');
            setEtapaCadastro(prev => prev + 1);
        } else {
            console.log('Validação falhou');
        }
    }, [etapaCadastro, formData, validateForm]);

    const handlePrevStep = useCallback(() => {
        setEtapaCadastro(prev => prev - 1);
    }, []);

    // Handlers de submissão otimizados
    const handleLoginSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const loginData = {
            loginCpf: formData.loginCpf,
            loginSenha: formData.loginSenha
        };
        
        if (validateForm(loginData)) {
            setStatus('success', 'Login bem-sucedido! Redirecionando...');
            setTimeout(() => {
                window.location.href = '/perfil';
            }, 1500);
        } else {
            setStatus('error', 'CPF ou senha inválidos.');
        }
    }, [formData, validateForm, setStatus]);

    const handleCadastroSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const cadastroData = {
            cadastroNomeCompleto: formData.cadastroNomeCompleto,
            cadastroCpf: formData.cadastroCpf,
            dataNascimento: formData.dataNascimento,
            cadastroEmail: formData.cadastroEmail,
            cadastroSenha: formData.cadastroSenha,
            confirmarSenha: formData.confirmarSenha
        };
        
        if (validateForm(cadastroData)) {
            // Exibe tela de sucesso dentro do CadastroForm (etapa 4)
            setEtapaCadastro(4);
            resetForm();
        } else {
            setStatus('error', 'Por favor, corrija os erros na última etapa.');
        }
    }, [formData, validateForm, resetForm, setStatus]);

    const handleEsqueciSenhaSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        const esqueciData = {
            esqueciCpf: formData.esqueciCpf,
            esqueciEmail: formData.esqueciEmail
        };
        
        if (validateForm(esqueciData)) {
            setStatus('success', 'Instruções de recuperação enviadas para seu email (simulação).');
        } else {
            setStatus('error', 'CPF ou email não encontrado/correspondente.');
        }
    }, [formData, validateForm, setStatus]);

    return (
        <main className="flex justify-center items-start min-h-screen bg-slate-100 p-4 sm:p-6">
            <div className="w-full max-w-md">
                {formAtual === 'login' && (
                    <LoginForm
                        formData={formData}
                        errors={errors}
                        statusMessage={statusMessage}
                        showPasswords={showPasswords}
                        onInputChange={handleInputChange}
                        onTogglePassword={togglePasswordVisibility}
                        onSubmit={handleLoginSubmit}
                        onFormChange={handleFormChange}
                    />
                )}

                {formAtual === 'cadastro' && (
                    <CadastroForm
                        formData={formData}
                        errors={errors}
                        statusMessage={statusMessage}
                        showPasswords={showPasswords}
                        etapaCadastro={etapaCadastro}
                        onInputChange={handleInputChange}
                        onTogglePassword={togglePasswordVisibility}
                        onSubmit={handleCadastroSubmit}
                        onFormChange={handleFormChange}
                        onNextStep={handleNextStep}
                        onPrevStep={handlePrevStep}
                    />
                )}

                {formAtual === 'esqueci' && (
                    <EsqueciSenhaForm
                        formData={formData}
                        errors={errors}
                        statusMessage={statusMessage}
                        onInputChange={handleInputChange}
                        onSubmit={handleEsqueciSenhaSubmit}
                        onFormChange={handleFormChange}
                    />
                )}
            </div>
        </main>
    );
}