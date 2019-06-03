package com.algaworks.contatos.repository;

import com.algaworks.contatos.model.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

public abstract interface Contatos
  extends JpaRepository<Contato, Long>
{}
